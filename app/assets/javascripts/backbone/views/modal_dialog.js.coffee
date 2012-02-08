Timeline.Views ||= {}

class Timeline.Views.ModalDialog extends Timeline.Views.Tickets.BaseSpace
  spaceName: I18n.t("views.members")
  buttonElement: "#members_button"

  initialize: ->
    @users = @options.users
    @users.bind('add', @addOne)
    @users.bind('reset', @render)
    @render()

  addAll: => _.each(@users.models, (user) => @addOne(user))

  addOne: (user) =>
    view = new Timeline.Views.Members.MemberView(model : user)
    view.render()
    @addView view

  render: =>
    super
    @addAll()
    console.log @users
    return this