# Bootstrap

### Objectives
You will be able to:
  1. Use Twitter's Bootstrap framework to make responsive web apps.
  2. Leverage some of the extensions of Bootstrap to create things such as modals.


## Exercise: Mobile Movies

Make a page for your favorite movie.
The page needs to have a heading that takes up the whole width and just contains the title of the movie.  You may want to consider using an offset to center the heading.

The row beneath that will have a description of the movie on the left half of the screen, and an unordered list of actors on the right half of the screen (on desktop).
###Solution
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1 class="col-md-12 col-md-offset-5">My Favorite Movie</h1>
    <div class = "container">
      <div class = "row">
        <div class = "col-md-3">
          <img src = "https://www.movieposter.com/posters/archive/main/101/MPW-50904" width = "250" height = "376">
        </div>
      </div>
      <div class="row">
        <div class = "col-md-6">
          <h1>Description</h1>
          A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.
        </div>
        <div class = "col-md-6">
          <h1>Starring</h1>
          <ul>
            <li>Leonardo DiCaprio</li>
            <li>Joseph Gordon-Levitt</li>
            <li>Ellen Page</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
  </body>
</html>
```

# Exercise: Movie Modal
Add a button that triggers a modal to your movie page from the last exercise.
The contents of the modal will be a quote from the movie.

**Bonus:** Try to use different button classes (see here for reference: http://getbootstrap.com/css/?#buttons)
###Solution
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1 class="col-md-12 col-md-offset-5">My Favorite Movie</h1>
    <div class = "container">
      <div class = "row">
        <div class = "col-md-3">
          <img src = "https://www.movieposter.com/posters/archive/main/101/MPW-50904" width = "250" height = "376">
        </div>
      </div>
      <div class="row">
        <div class = "col-md-6">
          <h1>Description</h1>
          A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.
        </div>
        <div class = "col-md-6">
          <h1>Starring</h1>
          <ul>
            <li>Leonardo DiCaprio</li>
            <li>Joseph Gordon-Levitt</li>
            <li>Ellen Page</li>
          </ul>
        </div>
      </div>
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#grenadeLauncher">
        Click Me!
        </button>
        <!-- Modal -->
        <div class="modal fade" id="grenadeLauncher">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Arthur</h4>
              </div>
              <div class="modal-body">
                You mustn't be afraid to dream a little bigger, darling.
                <a href="http://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1">INCEPTION</a>
              </div>
            </div>
          </div>
        </div>

    </div>
    <!-- Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
  </body>
</html>
```
