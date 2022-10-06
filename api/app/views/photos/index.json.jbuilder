json.array! @photos do |photo|

    json.photo_id photo.id
    
    json.url Rails.application.routes.url_helpers.rails_blob_path(photo.url, only_path: true) if photo.url.attached?
    json.desc photo.desc
    json.owner_name photo.user.name
    json.owner_id photo.user.id


    json.liked_users photo.likes do |item|
        json.liked_id item.id
        json.liked_user_id item.user_id 
        json.liked_user_name item.user.name
    end
        
end