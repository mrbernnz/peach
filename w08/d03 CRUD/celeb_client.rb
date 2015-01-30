require 'pry'
require 'httparty'
puts 'Go to this person address'
address = gets.chomp
response = HTTParty.get(address)
puts response['results']
guess = gets.chomp
res = HTTParty.get(address + '/' + guess)
puts res
