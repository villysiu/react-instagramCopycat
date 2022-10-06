    json.photo_id @photo.id
    json.url Rails.application.routes.url_helpers.rails_blob_path(@photo.url, only_path: true) if @photo.url.attached?
    json.desc @photo.desc
    json.owner_name @photo.user.name
    json.owner_id @photo.user.id
    json.liked_users []



        
