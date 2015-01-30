# Sunlight API
*The sunlight api allows you to query "the people and work of Congress"*

Reading documentation is a part of every programmers daily work, and you have been doing a lot of it during this class. This exercise is as much about reading docs as it is about programming.

[Sunlight API Docs](https://sunlightlabs.github.io/congress/)

### Part 1: Find the Twitter Account of a Senator
* Create an html page with one button to enter in a senator's last name.
* When the button is pressed you should display the twitter handle of that senator.
* If there is more than one person with that last name you could just show the first
* **Hint**: Scroll down to the `Filtering` section of the Docs for a clue

### Part 2: A more efficient query
* Turns out that with Sunlight you can make an API call and filter out only the fields that you actually need.
* Change the url that you were using in Part 1 to only return the `twitter_id` field
* **Hint**: Scroll to the `Partial Responses` section of the docs

### Part #3: Bills are cool
* Modify your solutions to part 1-2 to in addition return the most recent 0 - 10 bills proposed by that specific Senator
* You only need to display the `short_title` of each bill
* **Hint** This one is harder. You have to:
  * retrieve the `bioguide_id` for a senator
  * look for bills with a `sponsor_id` field equal to that `bioguide_id`
  * either grab the short title from the response, or filter only by that field in your url
* **Question** How do we know to link up the `bioguide_id` to the `sponsor_id`? It's not that obvious, and took one of your instructors about 20 minutes of searching through the docs. Unfortunately, this is kind of typical.


### Challenge

Use D3 to create some visualization from the data coming back from this API. This part of the exercise is free form and we encourage you to be creative.

**Turn this into a weekly project**
* This is one option for this week's weekly project.
* There have been final projects in this vein. Theoretically you could use this later on for your final project.
* You could alternatively use another government API. Check out the `More APIs` section of the docs ([quick link](https://sunlightlabs.github.io/congress/index.html#more-apis))
