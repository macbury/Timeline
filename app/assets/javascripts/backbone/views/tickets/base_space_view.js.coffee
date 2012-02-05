Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.BaseSpace extends Backbone.View
  template: JST["backbone/templates/tickets/space"]
  tagName: "td"
  spaceName: "Empty..."
  buttonElement: "#none"

  initialize: ->
    @options.tickets.bind('add', @addOne)
    @options.tickets.bind('reset', @addAll)
    @addAll()
    @render()
  
  show: => 
    @toggleButton.addClass("active")
    $(@el).show()
    @scroller.nanoScroller()
    @trigger("show")
  hide: => 
    $(@el).hide()
    @toggleButton.removeClass("active")
    @trigger("hide")
  
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

  addAll: =>
    @options.tickets.each(@addOne)
  
  update: => @scroller.nanoScroller()

  addOne: (ticket) =>
    view = new Timeline.Views.Tickets.TicketView({model : ticket})
    view.bind "resize", => @update()
    $(@el).find(".end").before(view.render().el)
    

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
    
    @hide()
    #@addAll()

    return this
