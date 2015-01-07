puts "What's your name"
name=gets.chomp
puts "Hello,#{name}, where are you from?"
state = gets.chomp.upcase

if state =="NY"
	puts "Welcome to NY"
elsif state == "NJ"
	puts "You must merge well"
else
	puts "Whaat!"
end