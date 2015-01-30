## Another Zoo

### Part 1: Express Server
Write an Express server that has a single route `/animals`

When the user hits this route, it will return the hash of animals listed below.

**Hint**: the hash presented is not JSON. It is both a valid Ruby hash and a valid JS object. If we were in Sinatra we would have to convert it to JSON using the method `hash.to_json`, but since we're using Express we can do `res.json(the-js-object)` or just `res.send(the-js-object)`
```js
{
  elephant: {
    name: 'Dumbo',
    type: 'Mammal',
    genus: 'Elepha',
    legs: 4
  },
  alligator: {
    name: 'Freddy',
    type: 'Reptile',
    genus: 'Alligator',
    legs: 4
  },
  panda: {
    name: 'Benji',
    type: 'Mammal',
    genus: 'Ailuropoda',
    legs: 4
  },
  lion: {
    name: 'Maxim',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  monkey: {
    name: 'Marco',
    type: 'Mammal',
    genus: 'Homo',
    legs: 2
  },
  koala: {
    name: 'Kai',
    type: 'Mammal',
    genus: 'Phascolarctos',
    legs: 4
  },
  tiger: {
    name: 'George',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  t_rex: {
    name: 'Milton',
    type: 'Dinosaur',
    genus: 'Tyrannosaurus',
    legs: 4
  },
  brown_bear: {
    name: 'Ted',
    type: 'Mammal',
    genus: 'Ursidae',
    legs: 4
  },
  dodo: {
    name: 'Gertrude',
    type: 'Bird',
    genus: 'Raphus',
    legs: 2
  },
  penguin: {
    name: 'Frankie',
    type: 'Bird',
    genus: 'Spheniscidae',
    legs: 2
  }
}
```

### Part 2: Animal (HTT)Party

Write a Ruby command-line script (not a server) that will ask the user for an animal (e.g. the user types in the terminal `tiger`)
Use HTTParty to hit the API at the route `/animals`, and print to the terminal the information for just that one animal. The route `/animals` returns much more information than just one animal, so you are going to have to do some rudimentary parsing of the response.

If that animal does not exist in the animals api, print out `No information for that animal was found.`

**Questions**:
  * Why is it that we can write a client in Ruby if the backend is in Javascript?
  * This program uses HTTParty, but it isn't considered a server. What makes something a server?
  * Sometimes we make Sinatra servers that use HTTParty too, what would be a scenario where we might want to do that?

### Part 3: Animal Types

In your Express server add the JSON route `/:type`.  
This route will select all the animals that have that type and return an Object in JSON that has the keys `type` and `matches` like in the following JSON:

```js
{
  "type": "Bird",
  "matches": ["Dodo", "Penguin"]
}

```

**Hint**: Think about how to organize your code so that both the `/:type` route and the `/animals` route can access the same large object of animals.

### Part 4a: Random Animal Backend
Add to your express server a JSON route `/random` that will return a random animal. The JSON could look like this:

```js
{
  "animal": "Tiger"
}
```

### Part 4b: Random Animal using Server Side Rendering

Create an **HTML** route `/show_random`. This will render an EJS template with some basic HTML that simply displays the name of the random animal. For instance if the random animal is a tiger it might render the HTML

```html
<html><body>
  <h1> Tiger </h1>
</body></html>
```

**Hints:**
  * This is not an AJAX route, but it is still just another route on your express server.
  * The distinguishing thing about this route is that it returns HTML rather than JSON, so its not considered part of the `API`. (APIs should return data, rather than user interfaces)
  * You should be able to hit this route in your browser by visiting `http://localhost:3000/show_random`. Then just refresh the page whenever you want a new random animal.
  * Think about how to organize your code so that both the `/show_random` route and the `/random` route can both choose a random animal without duplicating code. (e.g. put the choosing of a random animal in a function)

### Part 4c: Random Animal using AJAX
The route `/show_random` is one way to get a random animal, but we could also use AJAX on the frontend to consume the API at the endpoint `/random` (`/random` is the JSON route, `/show_random` is the HTML route).

Create an html file that uses AJAX to retrieve a random animal from `/random` and display it to the page (like in an `<h1>` tag). Be sure to have a button on the page to go back to the API and retrieve a different random animal.

**Hints:**
  * Be sure to have your server running in the background when you are viewing this html page so that it can consume the backend API
  * Note that this html page doesn't need to be served from the same server that has the API endpoints. All of this code could just live in an html file that you open up in your browser as a file (lazy way) or simply serve as a static file with `http-server` and then hit `localhost` in your browser (more proper way)
  * Think about the differences between this method of showing the user a random animal and the previous method of going to `/show_random`.
  * Although all of this can live in an html file, would you know how to serve this from your express server? The easiest way would be to put it in a public folder and add `app.use(express.static(__dirname + '/public'));` to your server.js.
  * You can also serve any html file directly from an express route. You can do it like this:
  ```js
  app.get('/another_show_random', function(req, res) {
    res.sendFile(__dirname + '/public/random.html')
  })
  ```
  But note that with this solution, any external css/js/img/fonts would still have to live in the public folder (Why? Because the browser will go back to the server to fetch any externally linked assets. If those assets are in the public folder, and we have `app.use(express.static(__dirname + '/public'));` in our server script, then those assets should be properly served.)

### Part 5: Adding Animals with a POST route
Add a form for adding new animal data, including inputs for animal name and type.

What route should this form submit to? Well it should be a `POST` route, because it is changing data on the server (it is adding a new animal).

Add the `POST` route `/add_animal` to your express server to handle when somebody submits this form. This should respond with **HTML** with an `<h1>` that says `Success` if the animal doesn't already exist or `Failure: Animal already exists` if that animal already existed.

**Hints:**
  * The page to show the form and the `POST` route `/add_animal` are not the same thing! `/add_animal` processes the form submission, but the actual form lives on another page. It can live in a static html in the public folder, or maybe in an EJS that an express route renders.
  * Did the form consume the API? NO! `/add_animal` is not a JSON API endpoint. It is like the route `/show_random` in that it renders an html page.
