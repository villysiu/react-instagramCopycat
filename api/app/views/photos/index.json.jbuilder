json.array! @photos do |photo|

    json.id photo.id
    
    json.url Rails.application.routes.url_helpers.rails_blob_path(photo.url, only_path: true) if photo.url.attached?
    json.desc photo.desc
    json.user photo.user.name
    json.photo_uid photo.user.id


    json.users_liked photo.likes do |item|
        json.liked_id item.id
        json.user_id item.user_id 
    end
        
end