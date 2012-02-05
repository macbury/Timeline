class Timeline.Models.User extends Backbone.Model
  paramRoot: 'users'

class Timeline.Collections.UsersCollection extends Backbone.Collection
  model: Timeline.Models.User
