##HTTP in node!

###Exercise 1:
Write an http server that, when started, requires two arguments.  The server should send an h1 tag which has an inner text of the first argument and a p tag which has an inner text of the second argument.

Remember that arguments on the command line will need quotes if they contain spaces.

###Exercise 2:
Write an http server that sends a link that points to its own page.

###Exercise 3:
Write an http server that reponds with the number of requests it has received up to that point. For instance, the first reponse would be "1", then "2", then "3".

**Note:** On Chrome every request for a new page is followed by a seperate request to your server for a "favicon", which is the icon in that shows up in the browser tab. This means that you should see "1" the first time you load your page, but then a response of "2" is sent immediately after when Chrome requests from your server a favicon! The string "2" is not a valid favicon so Chrome will just politely ignore it. If you keep refreshing the page you'll see "3", then "5", then "7", etc, with every even number being sent when Chrome requests a favicon.

###Exercise 4:
Write an http server that, when receiving an url of "http://localhost:2000/foo", sends "bar" to the browser. Any other route should just send the empty string.

###Exercise 5:
Write an http server that, when receiving an url of "http://localhost:2000/jaws" shows a picture of the Jaws movie poster. Link to an existing image on the internet to do so.

###Exercise 6:
Write an http server that responds to the path /tortilla/rice with an h1 that has the text "MMMMM". The path /tortilla/guac should respond with an h1 that says "AHHHH". The path /tortilla/[ANYTHING] should respond with "Well, [ANYTHING] is good on a tortilla, too. Any other path should return an h1 that has the text "Missing something..."
