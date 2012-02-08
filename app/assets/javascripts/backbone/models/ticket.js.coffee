class Timeline.Models.Ticket extends Backbone.Model
  paramRoot: 'ticket'
  errors: []

  Pending = 0
  Started = 1
  Finished = 3
  Delivered = 4
  Accepted = 5
  Rejected = 6
  Restart = 7

  currentSpace: null

  defaults:
    title: ""
    description: "",
    requested_by_id: null,
    owned_by_id: null,
    status: Pending
  
  pending:  -> @set(status: Pending)
  start:    -> @set(status: Started)
  finish:   -> @set(status: Finished)
  deliver:  -> @set(status: Delivered)
  accept:   -> @set(status: Accepted)
  reject:   -> @set(status: Restart)
  restart:  -> @set(status: Started)

  isBackLog: -> _.include([Pending, Rejected, Restart], @get('status')) || @isNew() 
  isCurrent: -> _.include([Started, Finished, Delivered], @get('status')) && !@isNew()
  isDone: -> _.include([Accepted], @get('status')) && !@isNew()

  isDelivered: -> @get("status") == Delivered

  status: ->
    switch @get('status')
      when Pending then "pending"
      when Started then "started"
      when Finished then "finished"
      when Delivered then "delivered"
      when Accepted then "accepted"
      when Rejected then "rejected"
      when Restart then "restart"
      else "started"
    

  nextState: ->
    switch @get('status')
      when Pending then @start()
      when Started then @finish()
      when Finished then @deliver()
      when Rejected then @restart()
      else @start()

class Timeline.Collections.TicketsCollection extends Backbone.Collection
  model: Timeline.Models.Ticket
  
  initialize: ->
    p = new Pusher()
    p.subscribeTag "current_workspace", (rsp) => @pull(rsp)
  
  pull: (rsp) =>
    return if rsp.user_id == window.user_id
    object = rsp.content
    ticket = @get(object.id)

    if rsp.action == "destroy" && ticket
      ticket.trigger("destroy")
      @remove [ticket]
    else
      if ticket
        ticket.set(object)
      else
        ticket = @add([object])
      ticket.trigger("pull")


  done: -> 
    @filter (ticket) -> ticket.isDone()
  current: -> 
    @filter (ticket) -> ticket.isCurrent()
  backLog: -> 
    @filter (ticket) -> ticket.isBackLog()


