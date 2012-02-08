json.array! users do |json, user|
  json.(user, :id, :login, :gravatar_url)
end
