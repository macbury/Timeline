Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.Spaces extends Backbone.View
  el: "body"

  events:
    "click #add_ticket": "addTicket"

  initialize: (options) ->
    @spaces = []
    @tickets = options.tickets
    $(window).resize => @resize()
    @render()

  addTicket: (e) =>
    t = new Timeline.Models.Ticket
    @tickets.add t
    e.preventDefault()

  addPending: =>
    @pendingSpace = new Timeline.Views.Tickets.PendingSpace(tickets: @tickets)
    @pendingSpace.bind "show", => @resize()
    @pendingSpace.bind "hide", => @resize()
    @tr.append(@pendingSpace.render().el)
    @spaces.push @pendingSpace

  addCurrent: =>
    @currentSpace = new Timeline.Views.Tickets.CurrentSpace(tickets: @tickets)
    @currentSpace.bind "show", => @resize()
    @currentSpace.bind "hide", => @resize()
    @tr.append(@currentSpace.render().el)
    @spaces.push @currentSpace

  addDone: =>
    @doneSpace = new Timeline.Views.Tickets.DoneSpace(tickets: @tickets)
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
    @addPending()
    @addCurrent()
    @addDone()
    @resize()

    @tr.sortable
      placeholder: "placeholder"
      forcePlaceholderSize: true
      handle: ".toolbar .move"
      cursor: "move"

    return this
