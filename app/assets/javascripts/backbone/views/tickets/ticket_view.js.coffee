Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.TicketView extends Backbone.View
  template: JST["backbone/templates/tickets/ticket"]
  className: "ticket"

  expand: =>
    @block.show()
    @list.hide()

  render: =>
    $(@el).html(@template())
    @block = $(@el).find(".block")
    @list = $(@el).find(".list")
    @form = @block.find("form")
    console.log @block
    console.log @list

    if @model.isNew()
      @expand()
      @form.find(".title").focus()
    else
      @collapse()
    return this