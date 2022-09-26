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
photos=Photo.create([
    {
        "desc": "Woody",
        "url": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
        "user_id": 1
    },
    {
        "desc": "Buzz Lightyear",
        "url": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
        "user_id": 2
    },
    {
        "desc": "Little Green Man",
        "url": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
        "user_id": 1
    },
    {
        "desc": "Bo Peep",
        "url": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
        "user_id": 2
    },
    {
        "desc": "Rex",
        "url": "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png",
        "user_id": 1
    },
    {
        "desc": "Mr. Potato Head",
        "url": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
        "user_id": 2
    },



])


likes=Like.create([
    { "photo_id":1, "user_id":1 },
    { 'photo_id':2, "user_id":2 },
    { 'photo_id':4, "user_id":2 }
])