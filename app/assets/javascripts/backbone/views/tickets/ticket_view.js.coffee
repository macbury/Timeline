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
  
  setErrors: (errors) =>
    fields = @form.find(".field")
    
    fields.removeClass("control-group")
    fields.removeClass("error")
    fields.find(".help-inline").remove()

    @form.find(":input").each (index, input) =>
      input = $(input)
      name = input.attr("name")
      field_errors = errors[name]
      if field_errors
        field_div = input.parents(".field")
        field_div.addClass("control-group").addClass("error")
        field_div.append("<span class='help-inline'>#{field_errors.join(", ")}</span>")

  save: (e) ->
    vals = {}
    save_btn = @form.find(".save")
    save_btn.button('loading')
    @form.find(":input").each (index, input) =>
      input = $(input)
      name = input.attr("name")
      vals[name] = input.val() if name
    
    new_model = @model.clone()
    new_model.url = @model.url()
    new_model.save(vals, {
      error: (model, rsp) => 
        @setErrors(JSON.parse(rsp.responseText))
        save_btn.button('reset')
      success: => 
        save_btn.button('reset')
        @model.set new_model.attributes
        @setErrors({})
        @collapse()
    })
    e.preventDefault()
    

  initialize: ->
    @users = @options.users
    @model.bind "change:errors", => this.render()
    @model.bind "change:errors", => this.render()
    @model.bind "change:owned_by_id", => @setOwner()
    @model.bind "change:title", => @list.find(".title span").text(@model.get("title"))
    @model.bind "change:status", => @renderStatus()
    @model.bind "change", => @updateUI()
    @model.bind "destroy", => $(@el).remove()
    @model.bind "pull", => @highlight()
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
    @reset_form()
    @trigger("resize")
  
  updateUI: (e) =>
    @list.find('.info.feature').popover title: @model.get("title"), content: @model.get("description")
  
  highlight: (e) => 
    @list.effect("highlight", {}, 500) unless $(@el).is(":hidden")

  reset_form: =>
    @setErrors({})
    @form.find(":input, select").each (index, input) =>
      input = $(input)
      input.val(@model.get(input.attr("name")))

  destroy: (e) =>
    @model.destroy()

  focus: ->
    @form.find("textarea").keyup()
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
    @reset_form()
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
    $(@el).attr("id", "ticket_#{@model.cid}")
    @block = $(@el).find(".block")
    @list = $(@el).find(".list")
    @form = @block.find("form")
    @reset_form()
    @renderStatus()
    @setOwner()
    @updateUI()
    @form.find(".title, textarea").bind 'keyup keypress change', ->
      $(this).height('');
      brCount = this.value.split('\n').length;
      this.rows = brCount;
      areaH = this.scrollHeight;
      lineHeight = $(this).css('line-height').replace('px','');
      calcRows = Math.floor(areaH/lineHeight);
      this.rows = calcRows;
        

    if @model.isNew()
      @expand()
    else
      @collapse()
    return this