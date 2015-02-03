##Topics
---
- Ruby Classes + Inheritance
- SQL Joins
- Active Record
- Serving static html files in JS express
- Use a crappy crystal ball
```js
var person = function(name,age){
    this.name=name;
    this.age=age;
    this.sayHello=function(){
        console.log('Hey, my name is: ' + this.name);
    };
};
```
```js
var sam = new person('Sam',26);
sam.sayHello();
```
####Ruby Class
---
```ruby
sam = person.new('Sam',26)
class Person
  # attr_reader :name -- read to this attribute.
    # replaces the name method getter
  # attr_writer :name -- write to this attribute
    # replaces the name method setter
  # attr_accessor :name -- read/write to this attribute
  # must be placed before the initialize method
  def initialize(name,age)
   @name=name
   @age=age
  end
  def say_hello
   puts 'Hi, my name is: #{@name}'
  end
  def name # getter get variable
    return @name
  end
  def age # getter get variable
    return @age
  end
end
```
```ruby
def name=(name) # setter set variable
@name=name
end
# how you set the instance outside the class
sam.name = 'Crawford'

```
```ruby
# classes with shared methods (purpose for inheritance)
class Dog
  attr_accessor :name, :owner
  def initialize(name, owner)
    @name = name
    @owner = owner
  end
  def bark
    puts 'bark'
  end
end
```
```ruby
class Cat
  attr_accessor :name, :owner
  def initialize(name, owner)
    @name = name
    @owner = owner
  end
  def meow
    puts 'meow'
  end
end
```
####Ruby Inheritance
---
```ruby
Class Animal
attr_accessor :name, :owner
  def initialize(name, owner)
    @name = name
    @owner = owner
    # @type = type
  end
end

class Dog < Animal
  def bark
    puts 'bark'
  end
end

class Cat < Animal
# overides parent to add type to Cat class
  # def initialize(name, owner)
    # super(name, owner, 'cat')
  # end
  def meow
    puts 'meow'
  end
end
```
```ruby
d = Dog.new('Waffles','Peach')
puts d.name #prints Waffles
puts d.owner #prints Peach
d.name = 'Rex'
puts d.name # Rex
d.bark # 'bark'
c = Cat.new('Felix','Peach')
puts c.name
```
```ruby
a = Animal.new('Giraffe','Peach')
puts a.name
a.name = ''
---
```
####Serving Static HTML files.
---
```js
// main>>server.js+public>>index.html+script.js+style.css
  app.use('/public', express.static(__dirname + '/public')); //serves up index.html when server is not running. server.js file
  app.get('/check') //server.js file
```
```html
<script src="script.js"></script> <!-- index.html -->
```
####Crappy Crystal Ball
---
|Monday|Tuesday|Wednesday|
|------|-------|---------|
|OAuth|Bootstrap|Backbone|
| |(Calm before the MVC storm)||
####Post Backbone
---
- rails

####Possible
---
- sessions/cookies
- bcrypt
- whatever else
