require 'digest/sha1'
FAYE_SECRET_TOKEN = 'f719d4c03987f577e07b244cae07d0e3c66b12e48d0e87e30eb7174e5dda8e52931ae66a2ff4c1b155335cea44aa926fcf0889c2b859821970e8288ebbddca24'
module Faye
  Url = "http://0.0.0.0:9292/realtime/"

  def self.make(channel)
    Digest::SHA1.hexdigest("faye-#{Time.new.day}-#{channel}-#{FAYE_SECRET_TOKEN}")
  end
end