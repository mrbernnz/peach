##Looping
```ruby
require 'Sinatra'
get '/' do
"<h1>Hello, World!"</h1>
text="<h2>I feel fine</h2>"
puts text
end
```
####example
```ruby
name = "Sam"
def say_hello
    puts "Hey, #{name}"
end
```
```ruby
#when done in sinatra
require 'sinatra'
name = "Sam"
get '/' do
    "<h1>Hello, #{name}</h1>"
end
```
reference cheatsheet for Looping to build up html
reference cheatsheet for Looping in an erb

example
```ruby
#inside get
people = ["Sonny","Cher"]
my_string = "<html><body><ul>"
    people.each do |person|
        my_string +="<li>#{person}</li>"
    end
    return my_string += "</ul></body></html>"
end
```
