## The Road to Login/Authentication


#### Part 1: What's the secret?

* Create a server (express or sinatra) with the routes:
  * `GET /` Give the user a form where they enter in a secret password in order to go to the main page. The form should submit the secret as a `GET` request to `/login`
  * `GET /login` If the secret passed to this route is correct, then redirect to `/secret_page`. If the secret passed is incorrect then redirect back to `/`.
    * You can redirect in express like this: `res.redirect('/someroute')`
  * `GET /secret_page` say Hello! and provide a link to `/secret_page2`.
  * `GET /secret_page2` say Hello Again! and provide a link back to `/secret_page`.
####Solution
```js
// server file
var express = require('express');
var pw = 'sleepy_dragon';

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/login', function (req, res) {
  if (req.query.password===pw) {
    res.redirect('/secret_page');
  } else{
    res.redirect('/');
  };
});
app.get('/secret_page',function (req,res) {
  res.send('Hello! <a href="/secret_page2">secret_page2</a>');
});
app.get('/secret_page2',function (req,res) {
  res.send('Hello Again! <a href="/secret_page">secret_page</a>');
});
```


#### Part 1b: Read in your secret from a JSON file
If you were to push the previous code to Github you probably would be showing the world the secret password. There's a smarter way to do this.

1. Create a file `secret.json` with the following format
    ```
    {
     "password": "secret-goes-here"
    }
    ```

2. Create a `.gitignore` file and add to it `secret.json`
3. In your server simply load this file in with `var secret = require('./secret.json');`
 * We have to do `./secret.json` rather than `secret.json` because it is a local file. `./` just means "in the directory I'm in"
4. Whenever you need to use the secret password in code, use `secret.password`.
####Solution
  add the secret.json file into .gitignore
```html
```
```json
//json file
{
  password: 'sleepy_dragon'
}
```
```js
// server file
var express = require('express');
var secret = require('./secret.json'); // requiring the json file that is in .gitignore file

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})
app.get('/login', function (req, res) {
  if (req.query.password===secret.password) {
    res.redirect('/secret_page');
  } else{
    res.redirect('/');
  };
});
app.get('/secret_page',function (req,res) {
  res.send('Hello! <a href="/secret_page2">secret_page2</a>');
});
app.get('/secret_page2',function (req,res) {
  res.send('Hello Again! <a href="/secret_page">secret_page</a>');
});
```

#### Part 2: Sessions
* First change the `GET /login` route to be `POST /session`. This is a RestFUL way of saying "Create a new session".
* On `POST /session` add the key `valid_user` to the session object with the value `true` if the secret is valid. If the secret is not valid you should still redirect to `/login`
* Change `/secret_page` and `/secret_page2` to check the `valid_user` key on the session object. If it is not set to true, redirect the user back to `/` to login.
####Solution
```html
<!-- index.html -->
<form action="session"  method="post">
      <input type="password" name="password">
      <button>Enter</button>
</form>
```
```js
// server file
var express = require('express');
var secret = require('./secret.json'); // requiring the json file that is in .gitignore file
var session = require('express-session');
var bodyParser require('body-parser'); // require values within a HTML file
var app = express();
app.use(bodyParser.urlencoded({extend: false}););
app.use(session({
    secret: secret.password,
    resave: false,
    saveUninitialized: true,
    valid_user: true
  }); app.get('/', function(require) {
    res.sendFile(__dirname + '/public/index.html');
  }); app.post('/session', function(req, res) {
    if (req.body.password === secret.password) {
      req.session.valid_user = true;
      res.redirect('/secret_page2');
    }; else {
      res.redirect('/login');
    };
  }); 
  }); app.get('/secret_page', function(req, res) {
    if (req.session.valid_user) {
      res.send('Hello! <a href="/secret_page2">secret_page2</a>');
    }; else {
      req.redirect('/');
    };
  }); app.get('/secret_page2', function(req, res) {
    if (req.session.valid_user) {
      res.send('Hello Again! <a href="/secret_page">secret_page</a>');
    }; else {
      req.redirect('/');
    };
  });
```

#### Part 3: Real User Passwords
* Change the `/` page so that there are two forms.
  * One form to create a new user that has a `username`, `password` and `confirm_password`. This should submit to `POST /user`. This is a RestFUL way of saying "Create a new user".
  * A second form for an existing user to login with just a `username` and `password`. This should submit a `POST` request to `/session` in order to create a session.
* `POST /user`
  * If `password` and `confirm_password` don't match redirect the user to `/`
  * Otherwise add a new user to a `User` table with that `username` and `password`. Give the user a session with a `valid_user` key (like in `/session`) and redirect them to `/secret_page`
* `POST /session`
  * Check to see that there is a user in the `User` table that matches the passed in `username` and `password`. If so redirect them to `/secret_page` with a `valid_user` session key, if not redirect them to `/`
####Solution

#### Part 4: Tales from the BCrypt

Storing passwords in plain text is a security hazard, because sometimes rows in tables are unintentionally leaked (e.g. logged somewhere) or hacked into.

We can store our passwords in the database encrypted, so that even if somebody got into the database, they wouldn't be able to steal people's passwords.


#### Super Bonus: OAuth with Github
This is a self-guided exercise, as OAuth isn't necessary to create a full fledged app.

Instead of a user creating their own account on a website, they could just login through with their Facebook, Twitter, Github, etc account. These APIs use OAuth to pull this off. Also, APIs will often have certain routes that you can't access without OAuth.

Unfortunately the ways that APIs implement OAuth is not always consistent. They'll be similiar in theory, with little differences in implementation.

This exercise is only about logging in through Github.

##### Github OAuth in Express
This is sample code (with a readme) that we created to show how to do Github
* [Github OAuth in Express](github-oauth-basic) (Read the readme!)

##### Github OAuth in Sinatra
This is a tutorial from Github's own site. It's pretty well layed out (compared to most APIs) and shows how to register your application as well. This is in Sinatra.
* [Github OAuth in Sinatra](https://developer.github.com/guides/basics-of-authentication)

##### Adding OAuth to this server
Complete these steps as an exercise in implementing OAuth with Github. As it changes a lot of your server code from the previous exercises you might want to copy what you already have made into another folder.

Take the `/login` route from the basic github oauth example and adapt it to use for your `/session` route.

1. Take out the `User` table. We don't need to store our own passwords anymore.
2. the `/` doesn't need the forms, it can just be a link to log in through Github
3. Have Github redirect to `/session` (this may be a `GET` request rather than a `POST` request)
4. In `/session` if you are able to successfully use the Oauth token to grab the user's Github information then `redirect` them to `/secret_page` with a `valid_user` session key. Otherwise redirect to `/` to try again.
