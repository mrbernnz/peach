# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

alvin = Author.create(name: 'Alvin', email: 'Alvin@peach.com', hair: false)
rachel = Author.create(name: 'Rachel', email: 'Rachel@peach.com', hair: true)

Article.create(headline: 'Class learns Ruby on Rails', author: alvin, content: 'In a stunning turn of events, a class has successfully learned Ruby on Rails in the midst of a zombie apocalypse.', photo_url: 'http://dhwlijwe9jil7.cloudfront.net/files/2012/07/4/ruby-on-rails-history.jpg')

Article.create(headline: 'Timmy fell down a well', author: rachel, content: 'In a disturbing turn of events, area middleschooler/bully Timmy has reportedly fallen down the county\'s deepest well, Devil\'s Holler.', photo_url: 'http://www.tiempolibre.ec/wp-content/uploads/2014/03/lassie.jpg')
