Timeline.Views.Tickets ||= {}

class Timeline.Views.Tickets.TicketView extends Backbone.View
  template: JST["backbone/templates/tickets/ticket"]
  className: "ticket"

  events:
    'click .list .status': 'changeStatus'
    'click .list .accept': 'accept'
    'click .list .reject': 'reject'

    'click form .save': 'save'
    'click form .destroy': 'destroy'
    'click form submit': 'save'
    'click form .cancel': 'collapse'
    'click .expand': 'expand'
    'click .collapse': 'collapse'

  save: (e) ->
    vals = {}
    @form.find(":input").each (index, input) =>
      input = $(input)
      name = input.attr("name")
      vals[name] = input.val() if name

    @model.save(vals, {
      error: (rsp) => console.log rsp
      success: => @collapse()
    })
    e.preventDefault()
    

  initialize: ->
    @users = @options.users
    @model.bind "change:errors", => this.render()
    @model.bind "change:errors", => this.render()
    @model.bind "change:owned_by_id", => @setOwner()
    @model.bind "change:title", => @list.find(".title").text(@model.get("title"))
    @model.bind "change:status", => @renderStatus()
    @model.bind "destroy", => $(@el).remove()
    @model.view = this
    
  setOwner: ->
    owner = @users.get(@model.get("owned_by_id"))
    if owner
      src = owner.get("gravatar_url")
      @list.find(".avatar img").attr("src", src)

  collapse: (e) =>
    e.preventDefault() if e
    @block.hide()
    @list.show()
    @destroy() if @model.isNew()
    @model.set @model.previousAttributes() 
    @reset_form()
    @trigger("resize")
  
  reset_form: =>
    @form.find(":input, select").each (index, input) =>
      input = $(input)
      input.val(@model.get(input.attr("name")))

  destroy: (e) =>
    @model.destroy()

  focus: ->
    @form.find(".title").focus()

  afterInsert: =>
    @form.find("select").chosen()
    @focus()

  expand: (e) =>
    e.preventDefault() if e
    if @model.isNew()
      @form.find(".destroy").hide()
    else
      @form.find(".destroy").show()
    @block.show()
    @list.hide()
    @focus()
    @trigger("resize")
  
  renderStatus: =>
    @list.find(".status").text(I18n.t("ticket.status.#{@model.status()}"))
    for klass in ["pending", "started", "finished", "delivered", "accepeted", "rejected"]
      $(@el).removeClass(klass)
    $(@el).addClass(@model.status())

  changeStatus: (e) =>
    @model.nextState()
    @model.save()
    e.preventDefault()
  
  accept: (e) =>
    @model.accept()
    @model.save()
    e.preventDefault()

  reject: (e) =>
    @model.reject()
    @model.save()
    e.preventDefault()

  render: =>
    $(@el).html(@template({ ticket: @model, users: @users }))
    @block = $(@el).find(".block")
    @list = $(@el).find(".list")
    @form = @block.find("form")
    @reset_form()
    @renderStatus()
    @setOwner()

    @form.find("textarea").elastic()

    if @model.isNew()
      @expand()
    else
      @collapse()
    return this