Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.CurrentSpace extends Timeline.Views.Tickets.BaseTicketSpace
  spaceName: I18n.t("views.current")
  buttonElement: "#current_space_button"

  tickets: -> @options.tickets.current()