# while continue
# 	puts "Enter a number."
# 	number = gets.chomp.to_i
# 	def multi_five?(number)
# 		if number % 5 == 0
# 			puts "It's a multiple of 5"
# 		else
# 			put "This is not a multiple of 5"

# 		end
# 	end
# end

# sam's solution
def multi_five?(number)
  return number % 5 == 0
end

get_fives = true
while get_fives
  puts "Enter a number or quit."
  number = gets.chomp
  if number == "quit"
    puts "Goodbye"
    get_fives = false
  else
    multiples_of_five = multi_five?(number.to_i)
    if multiples_of_five
      puts number + " is a multiple of 5"
    else
      puts number + " is not a multiple of 5"
    end
  end
end
