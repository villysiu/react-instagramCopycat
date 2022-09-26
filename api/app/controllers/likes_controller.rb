class LikesController < ApplicationController
    # before_action :authenticate_user!, :only => [:create, :destroy]
    before_action :find_photo
    before_action :find_like, :only => [:destroy]
    def index
        # @likes=Like.all
        render json: @photo.likes, except: [:created_at, :updated_at], include: [user: { only: [:name] }]
    end
    def create
        @like= @photo.likes.create(user_id: current_user.id)
    end
    def destroy
        @like.destroy
        render json: nil
    end

    private

    def find_photo
        @photo=Photo.find(params[:photo_id])
    end
    def find_like
        @like=@photo.likes.find(params[:id])
    end
    

end
