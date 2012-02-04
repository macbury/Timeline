Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.DoneSpace extends Timeline.Views.Tickets.BaseSpace
  spaceName: I18n.t("views.done")
  buttonElement: "#done_space_button"

  addOne: (ticket) =>
    false