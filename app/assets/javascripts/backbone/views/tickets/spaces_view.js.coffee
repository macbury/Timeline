Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.Spaces extends Backbone.View
  el: "body"

  events:
    "click #add_ticket": "addTicket"
    "click #refresh": "refresh"

  initialize: (options) ->
    @spaces = []
    @tickets = options.tickets
    @users = options.users
    $(window).resize => @resize()
    @render()
  
  refresh: (e) => 
    e.preventDefault()
    @tickets.fetch()
  addTicket: (e) =>
    t = new Timeline.Models.Ticket
    @tickets.add t
    e.preventDefault()

  addPending: =>
    @pendingSpace = new Timeline.Views.Tickets.PendingSpace(tickets: @tickets, users: @users)
    @pendingSpace.bind "show", => @resize()
    @pendingSpace.bind "hide", => @resize()
    @tr.append(@pendingSpace.render().el)
    @spaces.push @pendingSpace

  addCurrent: =>
    @currentSpace = new Timeline.Views.Tickets.CurrentSpace(tickets: @tickets, users: @users)
    @currentSpace.bind "show", => @resize()
    @currentSpace.bind "hide", => @resize()
    @tr.append(@currentSpace.render().el)
    @spaces.push @currentSpace

  addDone: =>
    @doneSpace = new Timeline.Views.Tickets.DoneSpace(tickets: @tickets, users: @users)
    @doneSpace.bind "show", => @resize()
    @doneSpace.bind "hide", => @resize()
    @tr.append(@doneSpace.render().el)
    @spaces.push @doneSpace

  resize: ->
    header_height = @header.height()
    body_height = $(@el).height()
     
    space_height = body_height - header_height - 35
    spaces = _.filter @spaces, (space) -> space.visible()

    width = 100.0 / spaces.length
    _.each spaces, (space) => 
      space.width(width)
      space.height(space_height)

  render: =>
    $('body, html').css overflow: "hidden"
    @header = $(@el).find(".header")
    @tr = $(@el).find("#spaces tr")
    @tr.empty()
    
    @addDone()
    @addCurrent()
    @addPending()

    @resize()

    @tr.sortable
      placeholder: "placeholder"
      forcePlaceholderSize: true
      handle: ".toolbar .move"
      cursor: "move"

    return this
