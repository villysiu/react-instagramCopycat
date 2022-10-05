class LikesController < ApplicationController

    before_action :find_photo
    before_action :find_like, :only => [:destroy]
    def index
        render json: @photo.likes, only: [:id, :user_id], include: [user: { only: [:name]}]
    end
    def create
        @like= @photo.likes.create(user_id: current_user.id)
        # render json: @like, only: [:id, :user_id]]
#         json.liked_id @like.id
# json.user_id @like.user_id 
    end
    def destroy
        @like.destroy
        # render json: nil
        puts @like.id
        render json: @like.id
    end

    private

    def find_photo
        @photo=Photo.find(params[:photo_id])
    end
    def find_like
        @like=@photo.likes.find(params[:id])
    end
    

end
