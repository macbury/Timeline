Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.PendingSpace extends Timeline.Views.Tickets.BaseSpace
  spaceName: "IceBox"
  buttonElement: "#pending_space_button"

  addOne: (ticket) =>
    super(ticket)
    @show() if ticket.isNew()