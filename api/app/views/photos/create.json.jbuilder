

    json.id @photo.id
    json.url @photo.url
    json.desc @photo.desc
    json.user @photo.user.name
    json.photo_uid photo.user.id
    json.users_liked []

        
