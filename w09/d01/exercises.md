##Hogwarts Registrar
You are going to create a student registration application for the Hogwarts Registrar's Office.

You will do this with a Sintara server and will have to create the following routes:
- `GET /students` - shows all students that are currently registered at Hogwarts
  - Each student links to the show page for that student.
  - Also contains a form so new students can register
  - The sign up form should ask for the following student information:
    - Name
    - Age
    - Favorite Spell
  - There should also be a way to update or delete an individual student from the show page.
- `GET /student/:id` - Shows a specific student
  - Should show that student's information (Name, Age, Favorite Spell)

  **Note**: You will need more routes than those two in order to accomplish this, but you will need at least 2 views (ERB's).

**BONUS 1**
- Add a page at the `/search` route which has a form that allows the user to search for a specific student by name to find out if they are registered or not
  - i.e. You should be able to type in "Harry Potter" and find out whether or not he is a currently registered student

**BONUS 2**: Sorting Hat
- Place a button saying "Sorting Hat" next to each student's name on the page for the `/students` route
- Clicking the button will randomly assign the student to one of the Hogwarts houses
- After a student has been assigned to a house, their name on the page for the `/students` route will no longer have the "Sorting Hat" button next to it
- There should be a page for each house at `/houses/:house_name` that will display a list of every student currently assigned to that house
- Clicking on a student's name should take you to the `/student/:id` route for that specific student

**BONUS 3**:
  - Store your data in a file (as JSON) and load it when the server loads.

  Here is how to read a file in Ruby:
  ```ruby
  json = ''
  if File.exist? "my/file/path"
      File.open("my/file/path", "r") do |f|
        f.each_line do |line|
          json << line
        end
      end
      students = JSON.parse(json)
  else
    students = {}
  end
  ```
  Here is how you can write a file in Ruby:
  ```ruby
  File.open("my/file/path", 'w') do |f|
    f << JSON.generate(students)
  end
  ```

  Remember to `require 'json'` at the top of your file.

**SUPER BONUS**:
  - Make this a Single Page App (SPA)  
  **Note:** You should work on the NYT exercise before starting this

# NY Times Bestsellers List

The hash at the bottom of this exercise contains data for books on the NY Times Bestsellers list.

Create a RESTful CRUD app in Express using this data to start off with.

This will include the following routes:
  - GET /books - shows all books
  - POST /book - creates a new book
  - GET /book/:id - shows a specific book
  - PUT /book/:id - updates a specific book
  - DELETE /book/:id - deletes a book from the hash

You will need the following views:
  - index.ejs - shows all books and links to the show page for each book
  - show.ejs - shows a single book and links to the edit page and back to the index page.  It will also have a delete link.  The delete link will take the user to the index page after deleting the book.
  Also has a form for editing a specific book.  Submit will take you to the show page.  This will also have a cancel link that will take the user back to the show page, with the updated values.

You will need more routes than this, but at a minimum, you will need 2 views.

**Some hints:**
- `res.redirect` will redirect to another route
- You will need `app.get`, `app.post`, `app.put`, and `app.delete`

**SUPER BONUS**: Make this a single page app (SPA).  You'll just have the index page and you can re-write the content on the page for show. Everything else will be done using AJAX.

```js
{  
  1: {
    id: 1,
    title: "THE GIRL ON THE TRAIN",  
    author: "Paula Hawkins",
    isbn13: "9780698185395",
    description: "A  psychological thriller set in London is full of complications and betrayals."
  },

  2: {
    id: 2,
    title: "SAINT ODD",
    author: "Dean Koontz",
    isbn13: "9780345545886",
    description: "In the conclusion to the Odd Thomas series, Odd, who can communicate with the dead, returns home to small-town California to meet one last challenge."
  },

  3: {
    id: 3,
    title: "GONE GIRL",
    author: "Gillian Flynn",
    isbn13: "9780307588388",
    description: "A woman disappears on the day of her fifth anniversary; is her husband a killer?"
  },

  4: {
    id: 4,
    title: "BIG LITTLE LIES",
    author: "Liane Moriarty",
    isbn13: "9780698138636",
    description: "Who will end up dead, and how, when three mothers with children in the same school become friends?"
  },

  5: {
    id: 5,
    title: "ALL THE LIGHT WE CANNOT SEE",
    author: "Anthony Doerr",
    isbn13: "9781476746609",
    description: "The lives of a blind French girl and a gadget-obsessed German boy before and during World War II, when their paths eventually cross. "
  },

  6: {
    id: 6,
    title: "COLD COLD HEART",
    author: "Tami Hoag",
    isbn13: "9780698157279",
    description: "Shaken by torture and rape at a serial killer’s hands, a TV reporter returns to her hometown, where she investigates the disappearance of a high school friend many years earlier."
  },

  7: {
    id: 7,
    title: "FATAL SCANDAL",
    author: "Marie Force",
    isbn13: "9781426898761",
    description: "In Book 8 of the Fatal series, Lt. Sam Holland of the Metropolitan Police Department defends two colleagues from allegations of scandal."
  },

  8: {
    id: 8,
    title: "CORPS SECURITY: THE SERIES",
    author: "Harper Sloan",
    isbn13: "A00B00RSL6G2K",
    description: "The six novels collected here follow the men of Corps Security, brought together by the Marines, as they pursue love."
  },

  9: {
    id: 9,
    title: "FIFTY SHADES OF GREY",
    author: "E L James",
    isbn13: "9781612130293",
    description: "An inexperienced college student falls in love with a tortured man who has particular sexual tastes; the first book in a trilogy."
  },

  10: {
    id: 10,
    title: "ONE NIGHT STAND",
    author: "JS Cooper and Helen Cooper",
    isbn13: "9781940218335",
    description: "A romantic fling between two wedding guests is more complicated than they thought."
  }
}
```
