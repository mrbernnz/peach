Create a Ninja Turtles Class called Turle. Give it an initializer that takes in a name, a color, and a weapon.

Create the following Ninja Turtles:

|Name|Color|Weapon|
|----|-----|------|
|Leonardo|Blue|Swords|
###Solutions
```ruby
class Turtles
attr_reader :name, :color, :weapon
def initialize(name,color,weapon)
  @name = name
  @color = color
  @weapon = weapon
  end
end
Leo = Turtles.new('Leonardo','Blue','Swords')
Don = Turtles.new('Donatello','Purlpe','Bo')
Raph = Turtles.new('Raphael','Red','Sai')
Mike = Turtles.new('Michalangelo','Orange','Nunchucks')

puts Leo.name...
```

Create a class called Food. Give it a method eat. Have it print out 'eating now...'. Create a class called Pizza. Give it a method called Taste. Have it print out 'Cowabunga'. Create a subclass call Asparagus. Give it a method called turtle. Have it print out 'Yuck!'

```ruby
class Food
def eat
puts 'Eating now...'
end
end
class Pizza < Food
def taste
puts 'Cowabunga'
end
end
class Asparagus < Food
def turtle
puts 'Yuck!'
end
end

food = Food.new
pizza = Pizza.new
asp = Asparagus.new
food.eat
pizza.taste
asp.turtle
```
