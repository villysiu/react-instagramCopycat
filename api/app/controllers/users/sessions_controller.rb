class Users::SessionsController < Devise::SessionsController
  respond_to :json
  
  private

  def respond_with(resource, _opts = {})
    @current_user=current_user
    render json: resource
  end
 

  def respond_to_on_destroy
    # head :no_content
    render json: { message: "Logged out." }
  end

end