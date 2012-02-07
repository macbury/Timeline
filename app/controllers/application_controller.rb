require "net/http"
class ApplicationController < ActionController::Base
  protect_from_forgery

  protected
    def render(options={})
      if options[:channel]
        channel = options[:channel]
        options.delete(:channel)
        broadcast(channel, { action: params[:action], content: JSON.parse(render_to_string(options)) })
      end
      
      super(options)
    end

    def broadcast(channel, content)
      Rails.logger.info "Sending #{channel}"
      message = {:channel => channel, :data => content, :ext => {:auth_token => Faye.make(channel)}}
      uri = URI.parse(Faye::Url)
      Net::HTTP.post_form(uri, :message => message.to_json)
    end
end
