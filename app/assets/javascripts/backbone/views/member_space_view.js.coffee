Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.DoneSpace extends Timeline.Views.Tickets.BaseTicketSpace
  spaceName: I18n.t("views.done")
  buttonElement: "#done_space_button"

  tickets: -> @options.tickets.done()
