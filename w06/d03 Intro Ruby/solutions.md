###Weatherman

```rb
# require "pry"

# binding.pry
# 
# david's cold
puts "What's the condition out side?"
condition = gets.chomp.downcase
puts "What's the temperature?"
temperature = gets.chomp.downcase
def weatherman(condition, temperature)
    /**
     * [condition description]
     * @type {[type]}
     */
    if condition == "rainy"
        if temperature == "cold"
            puts "better stay inside"
        elsif temperature == "hot"
            puts "sounds like a gross combination"
        end
    end
end
weatherman(condition, temperature)
```

```js
/**
 * [con description]
 * @type {[type]}
 */
var con = process.argv[2];
var temp = process.argv[3];
/**
 * [weatherman description]
 * @param  {[type]} con  [description]
 * @param  {[type]} temp [description]
 * @return {[type]}      [description]
 */
function weatherman(con, temp)
{
    if (con === "rainy" && temp === "cold")
    {
        return "Stay inside";
    }
    else if (con === "rainy" && temp === "hot")
    {
        return "Sounds gross";
    }
}
console.log(weatherman(con,temp));
```

###meaningofLife

```rb
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
```

###fives

```rb
# while continue
#   puts "Enter a number."
#   number = gets.chomp.to_i
#   def multi_five?(number)
#       if number % 5 == 0
#           puts "It's a multiple of 5"
#       else
#           put "This is not a multiple of 5"

#       end
#   end
# end

# sam's solution
/**git
 * method of multi_five
 */
def multi_five?(number)
  return number % 5 == 0
end
/**
 * [get_fives description]
 * @type {Boolean}
 */
get_fives = true
/**
while get_fives
  puts "Enter a number or quit."
  number = gets.chomp
  /**
   * [number description]
   * @type {[type]}
   */
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
```


