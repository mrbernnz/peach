# Using Atom and Your Terminal
*Learn how to get around your terminal and create/edit files like a pro.*

## Learning Objectives

- Understand basic keyboard shortcuts on the mac
- Understand the role and importance of the terminal
- Be able to navigate through directories in the terminal rather than in finder
- Be able to create, copy, and move files from the terminal
- Be able to open files and directories in atom

## Relevant Cheatsheets
  - [osx.md](../cheat_sheets/osx.md)
  - [terminal.md](../cheat_sheets/terminal.md)

## Exercises

#### Open and Close your terminal
  1. ```cmd-space``` and type "terminal" to open up your termainl
  3. type ```exit``` to exit out of this terminal session
  4. ```cmd-w``` to close this window
  5. ```cmd-n``` a couple of times to open some more terminal windows
  5. ```cmd-q``` to close the whole terminal app

#### Explore your home directory
  1. Type ```cd``` to go to your home folder
  2. ```ls``` see what is in your home directory
  3. ```cd folder``` to go into any folder that you spot. (and do this again to go into deeper subfolder)
  4. ```ls``` to see what lies in that directory
  4. ```cd``` at any time to go back to the home directory



#### Making files and folders
  1. ```mkdir films``` to make a directory
    - You can also give mkdir multiple folders at once
  2. ```cd films``` to go into that directory
  3. ```ls``` to see where you are
    - directory is empty, nothing there
  4. ```touch casablanca``` to make a file
  5. ```atom casablanca``` to open that file
    - add some text just to try it out
    - mac text shortcuts are on the cheatsheet
  6. ```touch jaws titanic twilight``` to make more movies!
  7. ```atom .``` to open the whole directory
    - add some text to the other files
  8. Close atom, make sure everything is saved
  9. ```rm casablanca jaws``` to remove a couple movies



#### Create the wXX/dXX folder structure
  - Create 12 folders for each week of the course. (e.g. ```w01```, ```w02```, etc.)
  - In each week folder, create 5 day folders (e.g. ```d01```, ```d02```, etc.)
  - Hint: You can use the up arrow to repeat any commands that you executed before


#### Spice Girls Exercise

 1. make a directory ```spice_girls``` to hold spice girls albums and songs
 2. in ```spice_girls``` make the directories ```spice``` ```spiceworld``` ```forever```
 3. put the lyrics to "wannabe" and "denying" into their respective album folders
 4. in the ```spice_girls``` folder make the directory ```greatest_hits```
  - Hint: make sure you aren't in one of the album folders already when you make ```greatest_hits```

#### Removing the Spice Girls
  Hint: You can use your [terminal cheatsheet](../cheat_sheets/terminal.md) for copying and removing folders
  1. make a copy of the whole directory ```spice_girls``` into ```spice_girls_backup```
  2. remove the folder ```spice_girls_backup```

## Further Exercises

#### Books
  1. in today's folder, create a folder called "books"
  - create a folder in books named after your favorite author (e.g. "MarkTwain", or "R.L.Stine", but avoid spaces!)
  - create files named after some of the author's books in the author's folder
  - open the books folder in atom
  - edit each file to put a brief description of the book

#### Movies

  1. in today's folder, create a folder called "movies"
    - for the rest of this exercise stay in the movies folder
  2. create a folder in movies named after your favorite actor
  3. create a folder in the actor folder named after the actor's breakthrough movie
  4. create a text file named after the actor's character in the breakthrough movie in the top level "movie" directory
  5. move the text file to the breakthrough movie's folder

#### Disco etc.
  1. in today's folder, create a folder called "music"
  2. create a folder called "Disco"
  3. create a text file in "Disco" called "YMCA"
  4. delete the "Disco" folder
  5. create a folder called "Creed"
  6. delete the "Creed" folder
  7. create folders called "Gloria_Jones", "Soft_Cell", and "Rihanna"
  8. create a text file in "Gloria Jones" called "Tainted_Love.txt"
  9. copy "Tainted_Love.txt" into "Soft_Cell" and "Rihanna"

#### Cleanup
  1. in today's folder, create a folder called "Media"
  2. move "books", "movies", and "music" into the "Media" folder

## Take Home Work

[Star Wars and the Command Line](star_wars.md)
