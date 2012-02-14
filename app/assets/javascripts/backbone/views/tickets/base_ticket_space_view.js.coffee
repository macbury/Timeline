Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.BaseTicketSpace extends Timeline.Views.Tickets.BaseSpace
  template: JST["backbone/templates/tickets/space"]
  tagName: "td"
  spaceName: "Empty..."
  buttonElement: "#none"

  events:
    "click .toolbar .act a.hide": "hide"

  initialize: ->
    super
    @options.tickets.bind('add', @addOne)
    @options.tickets.bind('change:space', @bindSpace)
    @options.tickets.bind('reset', @render)
    @render()
  
  have: (ticket) =>
    @tickets().filter((at) => ticket.cid == at.cid && ticket.currentSpace != @spaceName).length > 0

  bindSpace: (ticket) =>
    if @have ticket 
      ticket.currentSpace = @spaceName
      @addView(ticket.view) 

  toggle: =>
    unless @visible()
      @show()
    else
      @hide()
  
  tickets: -> false
  addAll: => _.each(@tickets(), (ticket) => @addOne(ticket))

  addOne: (ticket) =>
    return false unless @have ticket
    view = new Timeline.Views.Tickets.TicketView(model : ticket, users: @users)
    view.render()
    @addView view

  render: =>
    super
    @addAll()
    @inner.sortable
      axis: 'y'
      cursor: 'move'
      items: ".ticket"
      handle: ".title"
      placeholder: "place_holder"
      opacity: 0.6
      stop: (event,ui) =>
        ids = _.map @inner.sortable("toArray"), (el) -> el.replace("ticket_", "")
        index = 0
        _.each ids, (cid) =>
          index += 1
          model = @options.tickets.getByCid(cid)
          model.save
            position: index
    return this
