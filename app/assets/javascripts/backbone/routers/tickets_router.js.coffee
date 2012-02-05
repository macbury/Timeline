class Timeline.Routers.TicketsRouter extends Backbone.Router
  initialize: (options) ->
    @tickets = new Timeline.Collections.TicketsCollection()
    @tickets.url = options.url
    @tickets.fetch()

    @users = new Timeline.Collections.UsersCollection()
    @users.reset options.users
    console.log @users
    window.tickets = @tickets

  routes:
    "/new"      : "newTicket"
    "/index"    : "index"
    "/:id/edit" : "edit"
    "/:id"      : "show"
    ".*"        : "index"

  newTicket: ->
    @view = new Timeline.Views.Tickets.NewView(collection: @tickets)
    $("#tickets").html(@view.render().el)

  index: ->
    @spaces_view = new Timeline.Views.Tickets.Spaces(tickets: @tickets)

  show: (id) ->
    ticket = @tickets.get(id)

    @view = new Timeline.Views.Tickets.ShowView(model: ticket)
    $("#tickets").html(@view.render().el)

  edit: (id) ->
    ticket = @tickets.get(id)

    @view = new Timeline.Views.Tickets.EditView(model: ticket)
    $("#tickets").html(@view.render().el)
