# Git/Github and HTML
*Create git and Github repositories that include very basic html webpages*

## Learning Objectives

- Be able to make a repo on Github
- Be able to use the ```git``` command to push changes to github
- Understand the difference between ```git``` and Github
- Create a very basic webpage in HTML

## Setup
*First, your local computer needs to be set up to work with your Github account*
- follow this online guide, go right to step 2: https://help.github.com/articles/generating-ssh-keys/

## Making your first Git repository

#### Git Cheatsheet:
  - Initialize a repository:

        git init

  - Save all files to the repository:

        git add .
        git commit -m "message about changes"

#### Exercise: initialize a repository
  1. Go to the ```films``` directory that was made earlier
  2. Initialize this repository to tell git to keep track of this folder
  3. Save all existing files to this repository

Run ```git log```
  - you can now see the history of changes, with only one change
  - if you made more changes, there would be more here

## Making your first Github repository

#### Exercise: make a repository on github
  1. Go to your github account
  2. In the top left, hit the + button and select ```New repository``` ![](https://help.github.com/assets/images/help/repository/repo-create.png)
  3. Name your repository ```Hello-World``` ```Films```  ![](https://help.github.com/assets/images/help/repository/repo-create-name.png)
  4. Click the big green Create Repository button


## Connecting Git and Github

#### Git Cheatsheet
  - Connect a git repo folder to a github repository ```git remote add origin git@github.com:github-name/repository name.git```
  - Push changes from a git repo folder to its Github repository ```git push origin master```

#### Exercise: Connecting git to github
**Connect the local films git repository to the github repository**
  1. On the new Github Project Page for Films, copy the address in the text bar that looks similiar to: ```git@github.com:github-name/Films.git```
  2. In your terminal, navigate to your films directory
  3. Connect this git repo to your films repository, pasting in the git address for the appropriate command
  4. Push this repo to Github
  5. Now refresh your github webpage, and your films files should be there


## Making an HTML page

#### Cheatsheet
```html
<html>
<body>
<h1> Hello World </h1>
</body>
</html>
```

#### Exercise
  1. Make a new folder called "marquee"
  2. Initialize this folder as a git repository
  3. create an html file with a name of your choosing
  4. in your HTML put a message in a ```<marquee>``` tag
    - marquee tags are like header tags but scroll past the screen and are totally 90s
  5. Save all the files to your git repository
  6. Create a github repository and push this folder to that github repository

## Further Exercises

#### HTML Lists
**CheatSheet**
```html
<ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
</ul>
```
[```<li>``` documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

**Exercise**
  1. Create a new folder called "eightees"
  2. create the file ```80s.html``` in that folder that
  3. Edit ```80s.html``` to use the ```<li>``` and ```<ul>``` tags to create a list of 5 80's hit singles.
  4. Initialize this as a git repo and push it up to Github

#### Linked HTML pages
**CheatSheet**
```html
<a href="http://www.google.com/">
This is a link to Google
</a>
```
**Exercise**
  1. Go into your ```eightees``` folder from the previous exercise
  2. Add another file called ```90s.html```
  3. Create an **ordered list** using the ```<ol>``` tag of 5 90s hit singles
  4. Modify your ```80s.html``` file to include a link to ```90s.html```
  5. Save all your changes to the git repository and repush to github

## Take Home Work
[Markdown and READMEs](markdown.md)
