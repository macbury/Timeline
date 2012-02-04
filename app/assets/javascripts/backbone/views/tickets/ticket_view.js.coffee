Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.TicketView extends Backbone.View
  template: JST["backbone/templates/tickets/ticket"]
  className: "ticket"

  events:
    'click form .save': 'save'
    'click form .cancel': 'cancel'
  save: (e) ->
    @model.save({}, {
      error: -> console.log "error"
    })
    e.preventDefault()
    #@$(".save").button('loading')
    @collapse()
    
  cancel: (e)->
    e.preventDefault()
    @collapse()
    @model.destroy() if @model.isNew()
  
  initialize: ->
    @model.bind "change:errors", => this.render()
    @model.bind "destroy", => $(@el).remove()

  collapse: =>
    @block.hide()
    @list.show()
    @trigger("resize")

  expand: =>
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