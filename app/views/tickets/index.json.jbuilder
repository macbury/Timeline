json.array! @tickets do |json, ticket|
  json.(ticket, :id, :title)
end
