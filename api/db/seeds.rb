    #sample photos to add
    # "name": "Hamm",
    # "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",

    # "name": "Little Green Men",
    # "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",

users=User.create([
    {
        "email": "mickey@disney.com",
        "name": "mickey",
        "password": "mickeymouse"
    },
    {
        "email": "minnie@disney.com",
        "name": "minnie",
        "password": "minniemouse"
    }
])

photos=Photo.create(
[{
        "desc": "Cactus",
         "url": 'https://burst.shopifycdn.com/photos/friends-backpacking-together.jpg',
        "user_id": 1
}]
)

# likes=Like.create([
#     { "photo_id":1, "user_id":1 },
#     { 'photo_id':1, "user_id":2 },
# ])