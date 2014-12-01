####Canvas prettifier
Create an external stylesheet for your canvas html file.  Include a header, a div containing the canvas, and a footer.
The body of your html page should have a background color
The header should include a canvas name, and the font should not be black.
The div should have a border and a background color.
The canvas element should have a border.
The footer should have a background color and your name in italics aligned to the left.

Self-guided learning:
In the head of your canvas html page, add a meta tag including descriptions and a meta tag for keywords.  Also, set the language to english.

 Bonus: create a splash page - a different html file that links to your canvas page. It can use the same stylesheet or a different one if you prefer.

 Bonus 2: move the javascript controlling your canvas to a separate file and link to that script at the bottom of the body of your canvas html file.

####Blockbuster or bust
Write a command line program in javascript that takes three arguments; the first argument is a movie title, the second argument is a director's name, and the third is a rating: an integer between 0 and 2.

Create a constructor that takes the movie name and director name as parameters and creates a movie object. Once an instance of the movie object is created, print to the command line "MOVIE TITLE came out this past weekend, it was directed by DIRECTOR".

Next, add a function to the constructor that takes rating as an argument.  If rating is 0, the command line should print "Unfortunately, it gets two thumbs down". If the rating is 1, the command line should print "oen thumb up, one thumb down". If the rating is 2, the command line should show "TWO THUMBS UP!!!".

call the method on your movie object rating as it's parameter.
