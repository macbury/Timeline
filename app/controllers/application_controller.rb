require "net/http"
class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :set_user_time_zone

  protected
    def render(options={})
      if options[:channel]
        channel = options[:channel]
        options.delete(:channel)
        broadcast(channel, { action: params[:action], content: JSON.parse(render_to_string(options)), user_id: self.current_user.id })
      end
      
      super(options)
    end

    def broadcast(channel, content)
      Rails.logger.info "Sending #{channel}"
      message = {:channel => channel, :data => content, :ext => {:auth_token => Faye.make(channel)}}
      uri = URI.parse(Faye::Url)
      Net::HTTP.post_form(uri, :message => message.to_json)
    end

    def set_user_time_zone
      Time.zone = current_user.timezone if user_signed_in?
    end
end
