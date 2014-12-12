## Hosting your chat app

*Your chat app is required to be both on a Github repo and hosted on Digital Ocean.*

Here are the initial steps to accomplish this:

1. Put all of your server code and html/css/js for your browser-client code into one folder.
2. Go through the necessary steps to turn this folder into a git repo and push it up to a Github.
3. SSH to your Digital Ocean (DO) box.
4. **In the terminal where you are ssh'd into your DO box** `git clone` the `https` link from your Github repo. This automatically creates a folder for your repo, so you dont need to make a folder for your code beforehand.

Starting up your servers (a.k.a hosting)
1. SSH to your DO box if you haven't already
2. `cd` into the folder for your app (`git clone` initially made this).
3. run `git pull origin master` in order to pull down the latest code from Github
4. run your chat app server code (e.g. `node server.js`). This will turn your DO box into a websocket server running on port 3000
5. Open up **another** terminal. SSH to DO. `cd` into the folder for your app.
6. run `http-server`. This will turn your DO box into a http server to serve up your html/css/js files.
