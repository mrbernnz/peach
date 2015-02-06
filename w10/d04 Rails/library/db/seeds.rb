# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Book.create(title: 'The Art of War', author: 'Sun Tzu', status: false)
Book.create(title: 'Anna Karenina', author: 'Leo Tolstoy', status: false)
