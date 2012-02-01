Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.CurrentSpace extends Timeline.Views.Tickets.BaseSpace
  spaceName: "Current"
  buttonElement: "#current_space_button"

  addOne: (ticket) =>
    false