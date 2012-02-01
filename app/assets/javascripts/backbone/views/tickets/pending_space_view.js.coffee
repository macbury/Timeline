Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.PendingSpace extends Timeline.Views.Tickets.BaseSpace
  spaceName: "Pending"
  buttonElement: "#pending_space_button"

  addOne: (ticket) =>
    if ticket.isNew()
      super(ticket)
      @show()