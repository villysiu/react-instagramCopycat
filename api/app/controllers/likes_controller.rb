class LikesController < ApplicationController
    # before_action :authenticate_user!, :only => [:create, :destroy]
    before_action :find_photo
    before_action :find_like, :only => [:destroy]
    def index
        # @likes=Like.all
        render json: @photo.likes, except: [:created_at, :updated_at], include: [user: { only: [:name] }]
    end
    # def show
    #     puts @photo
    #     render json: @photo.likes
    # end
    def create
        puts current_user
        puts @photo.id
        @like= @photo.likes.create(user_id: current_user.id)
        # render json: @like, except: [:created_at, :updated_at]
       
    end
    def destroy
        @like.destroy
        render json: nil
    end

    private

    # def like_params
    #     params.require(:like).permit(:photo_id, :user_id)
    # end
    def find_photo
        @photo=Photo.find(params[:photo_id])
    end
    def find_like
        puts current_user
        @like=@photo.likes.find(params[:id])
        #  @like=@photo.likes.find_by_user_id(current_user.id)
        puts @like
    end
    

end
