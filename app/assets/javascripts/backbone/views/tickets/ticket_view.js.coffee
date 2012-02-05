Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.TicketView extends Backbone.View
  template: JST["backbone/templates/tickets/ticket"]
  className: "ticket"

  events:
    'click form .save': 'save'
    'click form submit': 'save'
    'click form .cancel': 'collapse'
    'click .expand': 'expand'
    'click .collapse': 'collapse'
  save: (e) ->
    @model.save({}, {
      error: => console.log "error"
      success: => @collapse()
    })
    e.preventDefault()
    @$(".save").button('loading')
    

  initialize: ->
    @model.bind "change:errors", => this.render()
    @model.bind "destroy", => $(@el).remove()

  collapse: (e) =>
    e.preventDefault() if e
    @block.hide()
    @list.show()
    @model.destroy() if @model.isNew()
    @trigger("resize")


  expand: (e) =>
    e.preventDefault() if e
    @block.show()
    @list.hide()
    @trigger("resize")

  render: =>
    $(@el).html(@template({ ticket: @model }))
    @block = $(@el).find(".block")
    @list = $(@el).find(".list")
    @form = @block.find("form")
    @form.find(":input").each (index, input) =>
      input = $(input)
      input.val(@model.get(input.attr("name")))
  
    @$(".save").data "loading", I18n.t("actions.saving")
    @model.bind "change:title", => @list.find(".title").text(@model.get("title"))
    @form.backboneLink(@model)
    #@form.find("select").chosen();
    if @model.isNew()
      @expand()
      @form.find(".title").focus()
    else
      @collapse()
    return this