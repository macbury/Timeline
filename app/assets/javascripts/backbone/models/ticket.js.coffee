class Timeline.Models.Ticket extends Backbone.Model
  paramRoot: 'ticket'
  errors: []

  #validate: (attrs)->
  #  validator = new Validator(attrs, "Ticket")
  #  console.log(validator)

  defaults:
    title: ""
    description: ""

class Timeline.Collections.TicketsCollection extends Backbone.Collection
  model: Timeline.Models.Ticket
  #url: '/tickets'

