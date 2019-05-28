class Api::MessagesController < ApplicationController
  def index
    @messages = Message.includes(:user).where("id: > ?", params[:id])
    respond_to do |format|
      format.html
      format.json
    end
  end
end
