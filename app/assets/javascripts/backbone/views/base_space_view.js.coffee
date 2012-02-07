Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.BaseSpace extends Backbone.View
  template: JST["backbone/templates/tickets/space"]
  tagName: "td"
  spaceName: "Empty..."
  buttonElement: "#none"

  events:
    "click .toolbar .act a.hide": "hide"

  initialize: ->
    @users = @options.users
    @render()

  show: => 
    @toggleButton.addClass("active")
    $(@el).show()
    @scroller.nanoScroller()
    @trigger("show")
    $.cookie("space_#{@spaceName}", 1)

  hide: (e) => 
    $(@el).hide()
    @toggleButton.removeClass("active")
    @trigger("hide")
    $.cookie("space_#{@spaceName}", null)
    e.preventDefault() if e
  
  visible: => !$(@el).is(":hidden")

  toggle: =>
    unless @visible()
      @show()
    else
      @hide()

  height: (space_height) ->
    inner_height = space_height - @toolbar.height() - 5
    @space.height(space_height)
    @inner.height(inner_height)
    @update()
  
  width: (new_width) ->
    $(@el).css
      width: "#{new_width}%"
  
  update: => @scroller.nanoScroller()

  addView: (view) =>
    view.unbind "resize"
    view.bind "resize", => @update()
    $(@el).find(".end").before(view.el)
    view.afterInsert() if view.afterInsert

  render: =>
    $(@el).html(@template())
    @space = $(@el).find(".space")
    @inner = $(@el).find(".inner")
    @scroller = $(@el).find(".nano")
    @toolbar = $(@el).find('.toolbar')
    @toolbar.find(".title").text @spaceName
    @toggleButton = $(@buttonElement)

    @toggleButton.unbind("click").bind "click", (e) => 
      @toggle()
      e.preventDefault()
      false

    if $.cookie("space_#{@spaceName}")
      @show()
    else
      @hide()

    return this
