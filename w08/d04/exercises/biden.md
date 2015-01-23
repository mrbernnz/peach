## Biden Today

In this exercise you will create a backend API to serve a random Joe Biden compliment, along with a simple frontend that consumes this API.

### Part 1: The Biden Backend

Create a Sinatra or Express server with the route `/compliment` that serves in JSON one Joe Biden compliment of the form `{"compliment": "This is a happy day."}`. Have your route choose one compliment randomly from the following array:

```js
[
  "You\'ve got some eyes, kid.",
  "Hi Sug.",
  "Who\'s this handsome guy!",
  "Hi, how are you? I hope you have a big fence around the house.",
  "Happy Birthday, baby!",
  "You know what I tell my grand-kids? Take care of your grandfather. That\'s your most important job. No serious guys til you\'re 30.",
  "You gonna build a fence around the house? A lotta machine guns?",
  "Call me if you need help on your pecs.",
  "No serious guys til you\'re 30.",
  "You\'ve got some killer eyes. The girls are in trouble.",
  "Thank God you look like your mother.",
  "Take care of grandpa. That\'s what I tell my grandkids.",
  "Spread your legs, you\'re gonna be frisked.",
  "Hey handsome, how are you?",
  "You have one job. Keep the boys away from your sister.",
  "A delight to meet you.",
  "You married up, son. You did real good.",
  "I love you. I tell you what.",
  "This is a happy day.",
  "Take care of him. He’s my best buddy.",
  "How old are you? Fifteen? I hope mom has a big fence.",
  "Thank you for being here. I appreciate it very much.",
  "Good to see you, Mom. What a great day for you.",
  "You\'re so lucky.",
  "Hey sister, you\'re beautiful.",
  "You\'ve got a beautiful sister.",
  "We have something in common. We both have sisters who are more beautiful and smarter than us.",
  "We both have something in common -- we both married up.",
  "Man, what a great family.",
  "Do you want to get a picture?",
  "Hey Dad! Welcome to the Old Senate!",
  "You guys have got some eyes.",
  "Hi Mom! Good to see you. I\'m Joe Biden.",
  "I want you next to me.",
  "You\'ve got a smile that lights up the room.",
  "You\'ve got a smile that lights up the whole chamber.",
  "Come on Mom. Take a chance and ruin your reputation here.",
  "Mom, do you realize in parts of Arizona this would risk your reputation.",
  "As they say in Southern Delaware, you\'ve done good, boy.",
  "Other than my mother this is the finest lady I have ever known.",
  "You are beautiful, holy mackerel.",
  "Look at those eyes. You have beautiful eyes.",
  "You guys are beautiful. I bet you\'re smarter than you\'re pretty too.",
  "Hi baby, how are you?",
  "Hi honey, how are you?",
  "You get right in here, baby.",
  "God love you, man."
]
```

### Part 2: Biden Today

Create a frontend to consume this API through AJAX. The idea is that people want to hear one Biden Compliment to start their day and give them direction, so this frontend just needs to consume the Biden API at the one route of `/compliment` and display it on the page in a friendly manner. That's it.

**Hints:**
  * Be sure to have the server from the backend part running while viewing your frontend webpage
  * The Frontend can technically just be an html file that you open up as a file directly in the browser. But this isn't really how files are served on the internet -- there is always a server. A more correct way to view your frontend would be to stick the html/css/js files in a folder that is served through 'http-server'. If your html file is called `index.html` then you can visit `http://localhost:8080/` to view your frontend (port `8080` is the default for `http-server`). This frontend would in turn consume an API running from your express/sinatra server at either `http://localhost:3000` (express) or `http://localhost:4567` (sinatra).
  * You also could stick the html/css/js into a public folder with your express/sinatra server. In the case of express, you would have to add the line `app.use(express.static(__dirname + '/public'));` to your server script. Then you would only need one server file to serve both the backend and the frontend. If your html file is called `index.html` then the route to serve your frontend could be reached at `http://localhost:3000/` and the API route it consumes at `http://localhost:3000/compliment`.
