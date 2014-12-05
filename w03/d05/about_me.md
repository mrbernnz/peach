## About Me Generator

Create an HTML file that only includes an html tag, a head that links to a stylesheet, a body tag, and a script tag.

**Using javascript** create:
  - one input takes the user's name
  - one input takes the user's sign
  - one input takes the user's hometown
  - one input takes the user's favorite css color
  - one submit button

When the user hits the submit button the inputs and button should disappear and an "about me" page should appear with the following minimum requirements:
  - The page should have a ```header``` with an ```h1``` nested inside that says ```all about [USER NAME]```
  - Under the header, create a `div` that spans across the entire page.
    - Within that `div`, make two more `div`s that are half the size of their parent `div`.
    - The `div` on the left should have a `p` tag stating the user's sign
    - the `div` on the right should have a `p` tag stating the user's hometown.
  - The body background color should be the user's favorite css color.
    - **Hint**: you can just set ```body.style.backgroundColor``` in javascript to change the background color.
  - Feel free to go cray cray with css.
