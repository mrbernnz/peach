require 'pry'
require_relative './lib/connection'
require_relative './lib/house'
require_relative './lib/character'


lannister = House.create({
  name: "Lannister",
  sigil_url: "http://img1.wikia.nocookie.net/__cb20140402110342/gameofthrones/images/thumb/0/0b/House-Lannister-heraldry.jpg/250px-House-Lannister-heraldry.webp",
  region: "The Westerlands"
})

stark = House.create({
  name: "Stark",
  sigil_url: "http://img2.wikia.nocookie.net/__cb20140402121259/gameofthrones/images/thumb/7/72/House-Stark-heraldry.jpg/250px-House-Stark-heraldry.jpg",
  region: "The North"
})

Character.create({
  name: "Tyrion",
  house_id: lannister.id,
  image_url: "http://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg"
})

Character.create({
  name: "Arya",
  house_id: stark.id,
  image_url: "http://static.comicvine.com/uploads/original/12/123851/2498566-arya_stark.jpg"
})
