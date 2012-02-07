require "faye"
require File.expand_path('../config/initializers/faye.rb', __FILE__)
  
class ServerAuth
   
  def incoming(message, callback)
    if message["channel"] == "/meta/subscribe"
      subscribe?(message)
    elsif message["channel"] !~ %r{^/meta/}
      publish?(message)
    end
    callback.call(message)
  end
   
  def publish?(message)
    puts message.inspect
    if message['ext']['auth_token'] != Faye.make(message['channel'])
      puts "Incorrect signature: #{message.inspect}"
      message["error"] = "Incorrect signature."
    end
  end
   
  def subscribe?(message)
    puts message.inspect
    if message['ext']['auth_token'] != Faye.make(message['subscription'])
      message["error"] = "Incorrect signature."
      puts "Incorrect signature: #{message.inspect}"
    end
  end
end
  
faye = Faye::RackAdapter.new(
  :mount => "/realtime", 
  :timeout => 20,
)
faye.add_extension(ServerAuth.new)
run faye
