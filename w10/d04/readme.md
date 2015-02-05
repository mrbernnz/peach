## Create your own blog app refresher
Using the skeleton found [here](blog_skeleton), create a working blog app. To do this, change the comments to actual code (as indicated in said comments) in the following files:
- app/assets/stylesheets/posts.css
- app/controllers/posts_controller.rb
- app/views/posts/ALL THE FILES
- db/seeds.rb

Don't forget to create your model first!
If you're having trouble remembering all of the steps, check [this](walkthrough) out.



## Create a library app using rails
- Create a table called books that includes text columns for each books' title and author and a boolean column called status that is 'true' when a book is checked in and 'false' when a book is checked out.
- When a user goes to /, they should see a list of library books that link to each book's own show page.  
- When they go to an individual book's page, they should see the title of the book, the author, and whether the book is checked in or checked out.
  - If the book is in, there should be a check out button that, when clicked, should change the page so it shows that the book is now checked out. This change should also be reflected in this particular book's entry in the book table.
  - If the book is out, there should be a check in button that, when clicked, should change the page so it shows that the book is now checked in. This change should also be reflected in this particular book's entry in the book table.
- There is no need to have a create or delete section for each book, but you will need to seed your database somehow...

### Bonus: authors
- When an author is mentioned, their name should be a link to their show page which includes a list of all the books by them in your library. Each book on the show page should link to the book's show page.
