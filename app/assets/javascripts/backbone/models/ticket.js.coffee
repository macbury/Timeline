class Timeline.Models.Ticket extends Backbone.Model
  paramRoot: 'ticket'
  errors: []

  Pending = 0
  Started = 1
  Finished = 3
  Delivered = 4
  Accepted = 5
  Rejected = 6

  #validate: (attrs)->
  #  validator = new Validator(attrs, "Ticket")
  #  console.log(validator)

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
  reject:   -> @set(status: Rejected)

  isDelivered: -> @get("status") == Delivered

  status: ->
    switch @get('status')
      when Pending then "pending"
      when Started then "started"
      when Finished then "finished"
      when Delivered then "delivered"
      when Accepted then "accepted"
      when Rejected then "rejected"
      else "started"
    

  nextState: ->
    switch @get('status')
      when Pending then @start()
      when Started then @finish()
      when Finished then @deliver()
      when Rejected then @pending()
      else @start()

class Timeline.Collections.TicketsCollection extends Backbone.Collection
  model: Timeline.Models.Ticket
  #url: '/tickets'

