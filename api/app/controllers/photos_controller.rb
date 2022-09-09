class PhotosController < ApplicationController
    before_action :authenticate_user!, :only => [:create]
   
    def index
        @photos = Photo.all
        
        # render json: @photos, except: [:created_at, :updated_at], include: [user: { only: [:name] }]
    end
    def create
        @photo = Photo.new(url: params[:photo][:url], desc: params[:photo][:desc], user_id: params[:photo][:user_id])

        # begin
            @photo.save!
            # render json: photo, except: [:created_at, :updated_at], include: [user: { only: [:name] }]
        
        # end
    end

    private

    def photo_params
        params.require(:photos).permit(:id, :url, :desc, :user_id)
    end
    
end
