#GUESS WHO (celebrity style)

In this exercise you will write both the server and client for a classwide game of Guess Who (celebrity style).
On the server, you'll be returning a JSON object with clues that you've added to help the client guess which celebrity you're thinking of.

The clues can be anything, with the only constraint that they have a key and a value, such as in this example:

```js
{ "results": {
  "profession": "tv star",
  "known_for": ["90s sitcom", "Modern Lawyer Comedy-Drama"],
  "gender": "male",
  "first letter of first name": "m",
  "extra hint": "Time out!"
}
}
```


## Server
write an api in express that:
- on `/` serves a celeb json object.
- on `/CELEBNAME` serves `{msg: "NICE JOB!"}`
- on `/:ANYTHINGELSE` serves `{msg: "hmm, try again"}`

host this on your DO box at port `3000`.

## Client
in ruby, write a command line app that:
- prompts the user for the ip address of another student
- then uses httparty to hit the route `/` at that ip address
- then prints to the terminal the response from that route
- then prints `Which celebrity might this be?` and waits for the user to take a guess
- then takes the guess from the user and hits the same ip address at the route `/CELEB_GUESS`
- if `NICE JOB` is the value of msg in the JSON returned, print that in the terminal
- if `hmm, try again` is the value of the msg in the JSON returned, print that in the terminal and then ask the user if they want to take another guess or move on to another student's ip address

## Crazy Challenge
What if you could write a script that would automatically hit an API with every celebrity name until it found the right answer? Well, you might be able to get close using IMDBs list of actors/actresses in plain text, which can be found [here](http://www.imdb.com/interfaces). Just keep in mind that you might unintentionally [DDoS](http://en.wikipedia.org/wiki/Denial-of-service_attack) your fellow student's server (maybe just test it out on your own).
