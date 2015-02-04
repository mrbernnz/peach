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
