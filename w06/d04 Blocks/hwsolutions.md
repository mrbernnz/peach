##Favorite Letter
```ruby
puts "What's your favorite letter?"
answer = gets.chomp
names = ["Janet", "Wilber", "Dominique", "Carli", "Pinkie", "Pietro", "Devyn", "Heaven", "Oma", "Astrid"]

list = names.select do |letter| letter.any?(answer) end
puts list
```
##