	puts "Do you want to know the meaning of life?"
	answer = gets.chomp.upcase
	def meaning_of_life(answer)
		if answer == "Y"
			puts 42
		else
			puts "It's said you don't want to."
		end
	end
	meaning_of_life(answer)
