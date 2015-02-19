# Digital Ocean Tips

# Sinatra

1. In your Gemfile, add the following:

```rb
source "https://www.rubygems.org"

gem "sinatra"
gem "unicorn"
```

Digital Ocean does not play well with Webrick (the default server that comes with Sinatra and Rails).  We will use Unicorn instead.

2. Create a file called `config.ru` in your project directory. (NOTE THE `.ru` EXTENSION!)

Put the following in it:

```rb
require './server'
run Sinatra::Application
```

3. Push your project to Github  

4. SSH to your Digital Ocean Box.  
`ssh root@your-digital-ocean-ip`  

5. Use `git clone your-repo` to clone from Github to your Digital Ocean box  

6. `cd` into that directory  

7. Run `bundle install`  

8. Run `nohup unicorn -p80 &`  
`nohup` allows your server to run even after you close out of your terminal.  
`unicorn` is the command to run the Unicorn server (works similar to `ruby server.rb`)  
`-p80` will use port 80 (the default port for http requests).  The default port for unicorn is 8080 if you don't do that.

9. Go to `http://your-digital-ocean-ip-address` (assuming you use port 80)
10. You should see your app (as long as you have a `/` route).

# Rails

Here are some tips for running your rails server on Digital Ocean:

1. Uncomment this line in your Gemfile:

```rb
# gem 'unicorn'
```
Unicorn is another HTTP server that you can run Rails apps on.  
Digital Ocean doesn't seem to work well with Webrick (the default Rails server).  
2. Push your project to Github  
3. SSH to your Digital Ocean Box.  
`ssh root@your-digital-ocean-ip`  
4. Use `git clone your-repo` to clone from Github to your Digital Ocean box  
5. `cd` into that directory  
6. Run `bundle install` to install your Gems  
7. Run `rake db:migrate` and `rake db:seed` to set up your database.  
8. Run `nohup unicorn -p80 &`  
`nohup` allows your server to run even after you close out of your terminal.  
`unicorn` is the command to run the Unicorn server (works similar to `rails server`)  
`-p80` will use port 80 (the default port for http requests).  The default port for unicorn is 8080 if you'd rather use that.

9. Go to `http://your-digital-ocean-ip-address` (assuming you use port 80)
10. You should see the root route of your app.

# Killing your server

At some point, you may want to kill the server that you are running.

Use the command `ps -aux | grep unicorn`.   

You'll see the following: 

```
root     29538  4.3  2.4  58908 12400 pts/0    Sl   11:55   0:00 unicorn master -p 80                                                              
```
Find the one that says `unicorn master` on the right.    
Grab the number on the left (next to `root`) and run `kill -9 <that number>`

In this example, it would be `kill -9 29538`

# Pushing API keys
If you are using a `secrets.json` or similar file to hold your API keys, you cannot push this to Github.

You can run `scp` (secure copy) to copy files up to your server.

1. SSH into your Digital Ocean machine.  Go to your project directory, and run `pwd`.  For example, you'll see `/root/my_project`.

2. On your LOCAL machine, `cd` into your project directory.  
`scp secrets.json root@YOUR_IP_ADDRESS:/root/my_project`

(Instead of `my_project`, it would be the path to your directory from step 1).

# Express
1. Make your app listen on port 80:
```js
app.listen(80);
console.log("Listening on port 80");
```
2. Push your project to Github  

3. SSH to your Digital Ocean Box.  
`ssh root@your-digital-ocean-ip`  

4. Use `git clone your-repo` to clone from Github to your Digital Ocean box  

5. `cd` into that directory  

6. Run `npm install`  

7. Run `nohup node server.js &`  
`nohup` allows your server to run even after you close out of your terminal.  

8. Go to `http://your-digital-ocean-ip-address` (assuming you use port 80)
9. You should see the root route of your app (assuming you have a `/` route).
