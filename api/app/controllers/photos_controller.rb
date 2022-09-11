class PhotosController < ApplicationController
    before_action :authenticate_user!, :only => [:create, :update]
    before_action :find_photo, :only => [:show, :update, :destroy]
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

    def update
        
        @photo.update(desc: params[:photo][:desc])
        render json: @photo, except: [:created_at, :updated_at]

    end
    def destroy
        
        @photo.destroy
        render json: nil
    end

    private

    def photo_params
        puts params
        params.require(:photos).permit(:id, :url, :desc, :user_id)
    end
    def find_photo
        puts params
        @photo=Photo.find(params[:id])
    end
    
end
