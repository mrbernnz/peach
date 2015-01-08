
# david's cold
puts "What's the condition out side?"
condition = gets.chomp.downcase
puts "What's the temperature?"
temperature = gets.chomp.downcase
def weatherman(condition, temperature)
	if condition == "rainy"
		if temperature == "cold"
			puts "better stay inside"
		elsif temperature == "hot"
			puts "sounds like a gross combination"
		end
	end
end
weatherman(condition, temperature)
