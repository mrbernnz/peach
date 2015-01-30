#Persist an about me SPA

using express, write a single page about me application.

- When the user goes to '/' for the first time they should see three inputs and a button. The inputs should take a name, hometown, and sign.
- Once the user enters that information and hits submit the inputs should disappear and the information should appear.
- the user's info should be sent to the server via AJAX and persisted in a sqlite3 database.
- the next time the user goes to '/' they should see their info, even if the server was restarted.

###Bonus
- Add a reset button that clears the about me info and makes the inputs and button reappear.
- Once the user enters their information and hits submit the inputs should disappear and their information should appear.
- the user's info should be sent to the server via AJAX and persisted in a sqlite3 database.
- the next time the user goes to '/' they should see their info, even if the server was restarted.

# Sing me a song!
Create a songs API that is backed by a SQLite database.
Songs will each have an id, a title, an artist, and an album.
The API will allow for all of our normal CRUD (Create, Read, Update, and Delete) operations.
The API will have a command-line (Ruby) interface.


#Make a CRUDdy todo list

##part 1

Create a single page todo list application using sinatra. When the user goes to '/' they should see an input and a button. After adding a chore to the input and clicking on the button, the chore should appear above the inputs in an unordered list. The list item should have a unique id. The user should be able to repeat this action.

###Bonus

Have the chores fade in.

##part 2

Have a delete button appear next to each chore. If the user clicks it, only that particular chore should disappear.

##part 3

Have a delete all button under the chore list. If the user clicks it, all chores should disappear.

##part 4

Have an unchecked checkbox appear with each new chore. If the user clicks it, the chore's text-decoration should change to line-through. If the user clicks it again, the text-decoration should change to none.

##part 5

Have an edit button appear below each chore. When clicked, the chore should disappear and an input should appear in it's place with the chore already filled in, not as a placeholder (don't forget a submit button!). Once the user edits their chore and hits the button the input should disappear and the new version of the chore should appear in its stead.

##part 6

Put a save button at the top of your list. When the user clicks it, the todo list should be turned into JSON, sent to the server via AJAX, and persisted in a sqlite3 database. The next time the user goes to '/', that chores list should appear.

###BONUS:
Take a unique username from the user, and save the todo list in a table named after the user. Whether a chore is strikethrough'd (struckthrough?) should be persisted. When the user goes to '/USERNAME' they should see their todo list.
