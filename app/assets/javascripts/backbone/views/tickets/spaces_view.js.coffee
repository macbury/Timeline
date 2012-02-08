Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.Spaces extends Backbone.View
  el: "body"

  events:
    "click #add_ticket": "addTicket"
    "click #refresh": "refresh"

  initialize: (options) ->
    @spaces = []
    @tickets = options.tickets
    @tickets.bind "all", => @updateTitleBar()
    @users = options.users
    @title = document.title
    $(window).resize => @resize()
    @render()

  updateTitleBar: =>
    remaining_count = @tickets.remaining().length
    if remaining_count && remaining_count > 0
      Notificon("#{remaining_count}", { favicon: "/favicon.png" })
      document.title = "#{@title} (#{remaining_count})"
    else
      Notificon("")
      document.title = @title

  refresh: (e) => 
    e.preventDefault()
    @tickets.fetch()

  addTicket: (e) =>
    t = new Timeline.Models.Ticket
    @tickets.add t
    e.preventDefault()

  registerSpace: (view) =>
    view.bind "show", => @resize()
    view.bind "hide", => @resize()
    @tr.append(view.render().el)
    @spaces.push view

  addPending: =>
    @pendingSpace = new Timeline.Views.Tickets.PendingSpace(tickets: @tickets, users: @users)
    @registerSpace(@pendingSpace)
  addCurrent: =>
    @currentSpace = new Timeline.Views.Tickets.CurrentSpace(tickets: @tickets, users: @users)
    @registerSpace(@currentSpace)
  addDone: =>
    @doneSpace = new Timeline.Views.Tickets.DoneSpace(tickets: @tickets, users: @users)
    @registerSpace(@doneSpace)
  addMembers: =>
    @membersSpace = new Timeline.Views.MemberSpace(users: @users)
    @registerSpace(@membersSpace)

  resize: ->
    header_height = @header.height()
    body_height = $(@el).height()
     
    space_height = body_height - header_height - 35
    spaces = _.filter @spaces, (space) -> space.visible()

    width = 100.0 / spaces.length
    _.each spaces, (space) => 
      space.width(width)
      space.height(space_height)

  render: =>
    $('body, html').css overflow: "hidden"
    @header = $(@el).find(".header")
    @tr = $(@el).find("#spaces tr")
    @tr.empty()
    
    @addDone()
    @addCurrent()
    @addPending()
    @addMembers()
    @updateTitleBar()

    @resize()

    @tr.sortable
      placeholder: "placeholder"
      forcePlaceholderSize: true
      handle: ".toolbar .move"
      cursor: "move"

    return this
