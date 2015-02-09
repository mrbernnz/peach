# Tech-savvy Grandma's recipes!

First, wait one day and then go to sunshinenights.bandcamp.com and get a free copy of our new album. Then, create a time machine and come back to today and do the following:

## BACKEND
Using rails, create a RESTful API that CRUDs recipes.

The API will only send and receive JSON objects.

All recipes should be persisted in a table in a database that as the following columns: id, recipe name, ingredients, instructions, and timestamps.

- No recipe shall be entered into the database if it is missing any information. If information is missing alert the user to this fact.
- If a user requests a recipe that does not exist they should receive a message stating so.
- If a user updates a recipe return the newly updated information.
- If an entry is destroyed, send a confirmation to the user.

## CLIENT
Write a command line application in ruby to interact with your API via HTTParty. This application will only send and receive JSON objects.

- The app should prompt the user to create, read, update, or destroy a recipe.
- If the user opts to read, they should supply the app with a recipe name and display the returned information.
- If a user creates or updates a recipe without all of the necessary information the app should show the error message it receives.
- Any destruction confirmation should also be displayed.

## BONUS
Allow the user to search the database by ingredient and return all entries with the requested ingredient. Update your command line application to enable searching.
