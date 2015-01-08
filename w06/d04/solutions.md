##It's-a-me! Mario!

```rb
super_mario = ["Mario","Luigi","Peach","Toad"]
super_mario.each do |character|
    puts character
end
```
####javascript
```js
super_mario = ["Mario","Luigi","Peach","Toad"]
super_mario.forEach(function(character)
{
    console.log(character)
    });
```

##Console Wars

```rb
characters = {
  "Nintendo" => ["Mario", "Luigi", "Peach", "Toad"],
  "Sega" => ["Sonic", "Tails", "Robotnick"],
  "Sony" => ["Crash Bandicoot", "Nathan Drake", "Solid Snake"]
}

hash.each do |key,value|
    puts "#{key}" has the following characters "#{value}"
end
```
###David's solution
```rb
characters.each do |key,value|
    puts "#{key}" has the following characters "#{value}"
end
```
###Sam's
```rb
characters.each do |key,value|
    puts "#{key}<words>"
    value.each do |character|
        puts character
    end
    #this will puts after every characters string
end
```

##I 'C' your point

```rb
characters = ["Mario", "Luigi", "Peach",
  "Toad", "Sonic", "Tails",
  "Robotnick", "Crash Bandicoot", "Nathan Drake",
  "Solid Snake"]
c = characters.select do |letter|
    letter.upcase.include?("c")
end
puts c
```
###Alternate
```rb
characters.select {|character| character.upcase.include?("c")}
```

###Rachel's
```rb
special_array =[]
characters.each do |char|
    format = char.split("")
    format.each do |letter|
        if letter == "c"
        special_array<<char
    end
    end
end
```


###Sam's javascript
```js
var c_characters = characters.filter(function(char)
{
    return char.toUpperCase().indexOf("C") > -1;
    });
console.log(c_characters);
```

###I can't hear you!

```rb
characters = ["Mario", "Luigi", "Peach",
              "Toad", "Sonic", "Tails",
              "Robotnick", "Crash Bandicoot", "Nathan Drake",
              "Solid Snake"]
capital = characters.map!{|cap| cap.upcase}
puts capital
```
####javascript
```js
var capital = characters.map(function(cap)
{
    return cap.toUpperCase().indexOf(characters);
    });
console.log(capital)
```

###David's
```rb
puts characters.map!{|char| char.upcase}
```
####javascript
```js
var charC = characters.map(function(char)
{
    return char.toUpperCase();
    });
console.log(CharC)
```

###Sam's one line code javascript
```js
console.log(haracters.map(function(char){return char.toUpperCase();});)
```