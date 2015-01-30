## Full Screen Giffy

Create a front end web app (no server) that cycles through gifs and shows them
full screen.

* On the main page create a search bar with a textbox and button
* When the user types in something to search for, like `funny cat` the first gif result is shown full screen (you can leave the search bar showing if you want)
* Every time the user hits the left or right arrow key, or maybe hits a "next button", the next gif result is shown

Use this as reference:
  * endpoint: http://api.giphy.com/v1/gifs/search?q=funny%20cat&api_key=dc6zaTOxFJmzC
    * Note that this is actually a public key that you can use
  * ruby: `response["data"][num]["images"]["original"]["url"]`
  * docs: https://github.com/giphy/GiphyAPI
