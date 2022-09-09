class PrivateController < ApplicationController
  before_action :authenticate_user!
  def test
    puts "test"
    render json: {
      message: "This is a private message for you should only see if you've got a correct token"
    }
  end
  def getLoginUser
    render json: current_user
  end

end
