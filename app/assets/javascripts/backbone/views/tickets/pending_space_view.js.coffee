Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.PendingSpace extends Timeline.Views.Tickets.BaseTicketSpace
  spaceName: I18n.t("views.backlog")
  buttonElement: "#pending_space_button"

  tickets: -> @options.tickets.backLog()

  addOne: (ticket) =>
    super(ticket)
    @show() if ticket.isNew()