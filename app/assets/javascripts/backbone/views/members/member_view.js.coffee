Timeline.Views.Members ||= {}

class Timeline.Views.Members.MemberView extends Backbone.View
  template: JST["backbone/templates/members/member"]
  className: "member"

  render: =>
    $(@el).html(@template( user: @model))
    this