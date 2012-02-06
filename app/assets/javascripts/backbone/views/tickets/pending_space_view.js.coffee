Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.PendingSpace extends Timeline.Views.Tickets.BaseSpace
  spaceName: I18n.t("views.backlog")
  buttonElement: "#pending_space_button"

  tickets: -> @options.tickets

  addOne: (ticket) =>
    super(ticket)
    @show() if ticket.isNew()