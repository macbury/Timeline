json.array! @tickets do |json, ticket|
  json.(ticket, :id, :title, :description, :created_at, :updated_at, :workspace_id, :requested_by_id, :owned_by_id)
end
