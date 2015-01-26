## RE-WRITE REDDIT:
- Write a server in express or sinatra that has only one HTML route: `/`.
- This one route should feed into an `index.ejs` or `index.erb`
- This index page should have a **form** with a drop-down menu of sorting options (sorting options include sort by score, sort by number of comments, and sort by created) and an input that takes a subreddit name (for example: cooking, phish, babyelephantgifs). There should also be a submit button in the form.
- When the browser first goes to '/', the server should get JSON from `http://www.reddit.com/r/all.json` and display a list of results in the format shown below.
- When the form is submitted, it should go **to the same route** at `/` but this time it will submit the form parameters indicating sorting options and subreddit. You must go to the proper reddit API endpoint for your specific subreddit (e.g. `http://www.reddit.com/r/funny.json`)
- **Hints**
  * you are not hitting the Reddit API in AJAX, you are hitting it from your server route, by either using `HTTParty` (Sinatra) or `request` (Express).
  * Every time the form is submitted the browser will refresh the page with the new subreddit and sorting options.
  * since both the initial page load and the submission of the form are going to the same route at `/` you are going to have to detect whether you are serving the initial page or not to know whether you should go to `http://www.reddit.com/r/all.json` or a specific subreddit. You can do this by checking to see if any form parameters have been sent over. If no form parameters have been sent over, then you must be serving the initial page.

```
DROP DOWN MENU  |||||  INPUT  ||||| SUBMIT

============================
I AM A TITLE OF A POST (AND I SHOULD GO TO THE PERMALINK WHEN CLICKED)
pics
p-dub
3763

I AM A TITLE OF THE NEXT POST (I TOO, SHOULD GO TO THE PERMALINK WHEN CLICKED)
aww
andrewsmith1986
3256
```

- The Reddit results should be a list of each title that links to the corresponding permalink.
- Under each title there should be a list of the author and score. The titles should be listed according to the option selected by the user.


## RE-WRITE RE-WRITE REDDIT
Create another version of your app that hits the Reddit API through AJAX in the browser instead of through `HTTParty` or `request` on the server. For this version, your app can be completely html/css/js with no server (although technically you should be serving even static files from a server such as `http-server` or from a public folder in an express or sinatra server.)

**Hint:**
For this version you should not be using form. Forms don't use AJAX by default, and instead cause a full browser refresh. You can still use a drop down element, textbox, and button element, but instead of a form just put an event listener on the button that grabs the values from the input fields and hits the Reddit API using AJAX.
