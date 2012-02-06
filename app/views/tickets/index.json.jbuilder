json.array! @tickets do |json, ticket|
  json.partial! ticket
end
