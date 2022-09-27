class PhotosController < ApplicationController
    before_action :authenticate_user!, :only => [:create, :update]
    before_action :find_photo, :only => [:show, :update, :destroy]
    def index
        @photos = Photo.all
    end
    def create
        @photo = Photo.create!(photo_params)
    end

    def update
        puts "in UPDATE"
        puts @photo     
        puts params
        @photo.update(desc: params[:desc])
        puts "after update"
        puts @photo.desc
        # render json: @photo, except: [:created_at, :updated_at]
        render json:nil
    end
    def destroy
        @photo.url.purge
        @photo.destroy
        render json: nil
    end

    private

    def photo_params
        params.permit(:user_id, :desc, :url)
    end
    def find_photo
        @photo=Photo.find(params[:id])
    end
    
end
