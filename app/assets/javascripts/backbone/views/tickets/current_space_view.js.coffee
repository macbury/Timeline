Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.CurrentSpace extends Timeline.Views.Tickets.BaseSpace
  spaceName: I18n.t("views.current")
  buttonElement: "#current_space_button"

  addOne: (ticket) =>
    false