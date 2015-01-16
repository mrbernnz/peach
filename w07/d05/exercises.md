#### Exercise: Multiple Form Parameters

Modify the todo homework from yesterday to submit to the server a user's first name, last name, and email. Below the form should be a list of all users (with their emails) that have been submitted previously.

**Hint**:
* Instead of using an array of strings like in the todo homework, use an array of objects.
* Each time the form is submitted, the server can create an object with a user's first, last, and email, and then add this object to the array.
* When rendering to an ERB or EJS, you will have to loop through the array and print out each user's first, last, and email.

#### Exercise: Movie Poster search
Create an html page with one textbox and one button. When the user enters in a movie title in the textbox and clicks on the button a movie poster should appear below. You will have to use the OMDB API and AJAX to pull this off.

**Hint:** Don't use a form. Just add a "click" eventlistener to the button that reads in the text in the textbox.

#### Exercise: Clean up RandomUser output
Use the `request` package to create your own randomuser route in express that returns one object in JSON with the properties of a randomuser (rather than a response with nested objects/arrays).

#### Exercise: Create your own RandomUser API endpoint
In Express create one route that returns in JSON the properties of a random user. **Do not** use the RandomUser API, for this exercise you will be making random users on your own.
