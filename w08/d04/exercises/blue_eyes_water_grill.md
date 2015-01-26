## Blue Eyes Water Grill
For this exercise, complete each step before moving on to the next one.

1. Write a sinatra server with a route `/` that renders an `index.erb`. Your `index.erb` should expect the local parameter `greeting`. For the route `/` set the greeting local to `Welcome to Blue Eyes Water Grill!`.

2. Add the route `/appetizer` to your sinatra server. It should also render the template `index.erb` but with this route also send the local parameter `meal` and set it to `Oysters`. Your template should check for the existance of the `meal` parameter and if it exists add a `<p>` tag with the innerHTML `Here is your [meal]`

3. Add the route `/entree` to your sinatra server. It should render `index.erb` with the local parameter `meal` set to `Lobster Roll`

4. Add the route `/:meal` to your sinatra server. It should render `index.erb` with the local parameter `meal` set to the route parameter `meal` (e.g. the value of `:meal` in the url, so `http://localhost:4567/bbq` would set `meal` to `bbq`)

### BONUS
If the `meal` in the route `/:meal` ends with the letter s, have the text in the `<p>` tag change to `Here are your [meal]`.
