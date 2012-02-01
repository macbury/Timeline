Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.DoneSpace extends Timeline.Views.Tickets.BaseSpace
  spaceName: "Done"
  buttonElement: "#done_space_button"

  addOne: (ticket) =>
    false