## Hosting your chat app

*Your chat app is required to be both on a Github repo and hosted on Digital Ocean.*

#### Setting up your hosted app the first time:

1. Put all of your server code and html/css/js for your browser-client code into one folder.
2. Be sure that your folder includes a package.json. If it doesn't you will have to:
  - run `npm init` inside that folder
  - run `npm install ws --save` inside that folder
2. Go through the necessary steps to turn this folder into a git repo and push it up to a Github.
3. SSH to your Digital Ocean (DO) box: `ssh root@[your-name].princesspeach.nyc`
4. **In the terminal where you are ssh'd into your DO box** `git clone` the `https` link from your Github repo. This automatically creates a folder for your repo, so you dont need to make a folder for your code beforehand.
5. `cd` into your repo's folder
6. run `npm install`

#### Starting your server

*Now that you have a clone of your repo on your DO box, this is what you will have to do every time you want to start up your server.*

1. SSH to your DO box if you haven't already
2. `cd` into the folder for your app (`git clone` initially made this).
3. run `git pull origin master` in order to pull down the latest code from Github
4. run `npm install` (this probably doesn't need to be done every time, but just in case you changed anything in the package.json you can do this step again)
4. run your chat app server code (e.g. `node server.js`). This will turn your DO box into a websocket server running on port 3000
5. Open up **another** terminal. SSH to DO. `cd` into the folder for your app.
6. run `http-server`. This will turn your DO box into a http server to serve up your html/css/js files.
  - Running `http-server` will require browsers to access your app through the address `http://[your-name].princesspeach.nyc:8080`
  - Running `http-server -p80` will allow browsers to access your app through the address `http://[your-name].princesspeach.nyc` (leaving off the port number at the end)

#### Develop your app locally
- you should mostly be developing your app locally and not through DO. DO is just used to host your app when it is in a working state and you want to show it off to people.
- while developing locally, make sure that your **client** code uses the address `ws://localhost:3000`
- the code that you push up to Github and pull down to your DO box should use the address `ws://[your-name].princesspeach.nyc:3000`
- whenever you want to see your latest code running on Digital Ocean, you need to push up your local changes to Github before pulling them back down to your DO box
