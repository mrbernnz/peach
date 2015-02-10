# models and collection practice
## Make a back end
- Turn the newspaper app from w10/d04 into an API.
- Add all necessary backbone files to the app. This can be done by downloading the files or linking to them in layout.html.erb.
- Add a collections.js and models.js to apps/assets/javascript. Don't forget to include them in your asset pipeline.

## Manipulate your models.
- In your models script, create an article class that, when initialized, logs "A new article has been written."
- If an article changes, log "STOP THE PRESSES!!!"
- If an article's content changes, log "Who let that copy through?"
- Add validations to your article model.
- If a picture is part of the article, make sure the url is a valid url by ensuring that it starts with "http://"
- Also ensure that your article has an author, content, and a headline.

Test your validations by pasting the following code into your console; each time you paste it comment out a different attribute.
```js
var newArticle = new Article({
  author: "Peter Parker",
  headline: "Spiders attack!"
  content: "After spiders killed my parents, I decided to become a crime fighter"
  url: "http://img3.wikia.nocookie.net/__cb20100419210629/marvel_dc/images/1/14/Superman_0002.jpg"
})
```

Test your initialize hash by writing code that creates a valid article which has a change to its content followed by a change to its headline. Paste this code into the console to test.

## Collect your models
![Collect your Models](http://cdn.makeagif.com/media/2-10-2014/bIK3dS.gif)

Write code to do the following; it does not all have to execute all at once (basically, feel free to comment out working sections as you see fit):
- get all articles in the database
- create a new instance of an article and post it to the database
- edit a previously existing article and put it to the database
- destroy an existing article so it is no longer in the database

### Bonus
- get a single item out of your database.
- [Hint](http://documentcloud.github.io/backbone/#Model-url)

### SUPER Bonus
This one is tough.
- Backbone doesn't preclude regular javascript!
- if a user goes to /, render an html file and append all of the articles to the page using js.
- [Hint](http://stackoverflow.com/questions/17858178/allow-anything-through-cors-policy)
- [Go to section 8 for a hint on the hint](http://guides.rubyonrails.org/action_controller_overview.html)

### SUPERER Bonus
- style your page with bootstrap.
