## Learning Objectives
1. Perform looping in ERB templates
3. Templating with EJS
2. Create basic routes in express

### Exercise: Build a small html list without templates

* Create a sinatra server
* Create an array of celebrity names at the top of your server
* Create a route for `/` that loops through the array of names and builds an unordered list in html with each name

####Solution
```ruby
#sinatra server
require 'sinatra'
get '/' do
celebs = ["George\ Clooney","Angelina\ Jolie","Matt\ Damon","Don\ Cheadle","Amy\ Poehler"]
#short hand only done for strings
celebs = %w{George\ Clooney Angelina\ Jolie Matt\ Damon Don\Cheadle Amy\ Poehler}
celeb_string = <html><body><ul>
    celebs.each do |celeb|
        celeb_string += "<li>#{celeb}</li>"
    end
    return celeb_string += </ul></body></html>
end
```

### Exercise: Cats are cool

Check out http://placekitten.com. Basically it allows you to do this:

```html
<html>
<body>
<img src="http://placekitten.com/g/200/300">
<img src="http://placekitten.com/g/200/400">
<img src="http://placekitten.com/g/300/400">
<img src="http://placekitten.com/g/300/300">
</body>
</html>
```

Get a different cat picture by just specifying the width and height in the "src" url of the image.

Here's your task:
* Create a sinatra server
* Write a route that takes two parameters, a width and a height
* Render an erb template that has 15 different cat pictures. Use the width from the route, but increment the height for each cat picture in order to pull down a unique cat for each image.
* **Hint**: you'll probably want to convert the width/height url parameters to integers
####solution
```html
<!-- localhost:4567 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The World of Cats</title>
</head>
<body>
  <h1><%=name%></h1>
  <ul>
        <%image.each do |image|%>
        <li><img src='<%=image%>'><li>
        <% end%>
  </ul>
</body>
</html>
```
```ruby
require 'sinatra'
get '/:width/:height' do
  # puts "#{fullpath}"
  path1=(params[:width])
  path2=(params[:height])
  path2 = Integer(path2)
  # fullpath = ":width/:height"
  page = []
  15.times do
    page.push "http://placekitten.com/g/#{path1}/#{path2}"
    path2+=2
  end
  erb(:index, locals:{name:"HELLO CAT LOVERS!!", image:page})
end
```

### Exercise: EJS with a basic node http server
  * Repeat the placekitten exercise, but this time create a basic node http server and use EJS for templating
  * **Hint:** we've created http servers before, all they do is output a string to the client like `res.end(mystring)` for each route. We also just went over "rendering" a template to a string. You will need to put those two pieces together to solve this.

### Exercise: Express with EJS
* Repeat the placekitten exercise, but now using Express instead of a basic node http server
* On your cheatsheet is an example of using Express with parameters
