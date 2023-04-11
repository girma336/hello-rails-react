class Api::MessageController < ApplicationController
  def index
    @messages = Message.all.sample
    render json: @messages
  end
end
