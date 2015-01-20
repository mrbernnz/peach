## RandomSomething API
The [randomuser.me](https://randomuser.me) website showcases the usage of the randomuser API, and is pretty sweet.

You should realize a couple things about this website
1. The site https://randomuser.me is not the API, it is a user-facing web app that consumes the randomuser API
2. The **api** is at the different address http://api.randomuser.me
3. The user-facing web app calls the API through AJAX, and just puts some fancy animation on top of that

So there is:
1. The backend API at https://randomuser.me
2. The user-facing web app that consumes the backend API at http://api.randomuser.me

You will create two similiar components, but instead of being for a random **user**, it will be for something else random, like a band or a sports team.

### Requirements:
* API
  * This will be either a server in express or sinatra that returns JSON
  * There should be one route at `/` that returns a hash/object of a random something
  * Each new call to the one route should produce a different random something
* User-facing Frontend
  * Use [randomuser.me](https://randomuser.me) as a model for this project (and then deviate where you want to)
  * You should create a visual representation of the data coming back from the API. If you are doing a sports team then it could show the Team's logo, name, # of championships, etc.
  * Provide a way to cycle to another random something (on the randomuser website you click on a "next" button near the person's face)
  * Have a "How to Use" section that shows how to hit the API in AJAX using Vanilla JS (the randomuser.me site shows it in JQuery)
  * Have a Results section that shows a sample JSON response from your API
  * **Styling is cool** As much as possible, imagine this is as a portfolio piece for an API you're showing off. If anything, you can use this as a template for a future API that you create and want to have a user-facing frontend for.

### Want even more of a challenge?
  * Add to your front-end a special admin interface where the user could add to their backend extra random values
  * For instance, if we were doing just a plain random user api, we could have a form to add hometowns, or emails, etc.
  * Make sure that these forms do a post request
  * **Hint** the routes that handle the data coming from the form can exist in the same server that provides the backend API
    * those routes can even manipulate the same server-side variables that the API uses
