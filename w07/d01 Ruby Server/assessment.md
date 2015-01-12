##Assessment
1. In ruby put these in an array:
    - Starburst
    - Lifesavers
    - Snickers
    - Milky Way
    - Three Musketeers
    - Skittle
Then:
1. Use .each to print each element.
2. Map over all of them and upcase all of them.
Bonus:
Ask the user for a letter. Use select to pick candies with that letter and print said candies

```rb
candies = ["Starburst","Lifesavers","Snickers","Milky Way","Three Musketeers","Skittle"]

#1.
<variable> = candies.each{|candy| puts candy}
<variable>

#2.
<variable> = candies.map!{|candy| puts candy.upcase}
<variable>

#Bonus
puts "Give me a letter"
letter = gets.chomp.upcase

candies.select{|candy| candy.include?(letter)}
```

