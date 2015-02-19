# Digital Ocean Tips

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
10. You should see the root route of your site.

# Killing your server

At some point, you may want to kill the server that you are running.

Use the command `ps -aux | grep unicorn`.  Find the one that says `unicorn master` on the right.  
Grab the number on the left (next to `root`) and run `kill -9 <that number>`, where that number is the one that was next to root (don't include the `<>`)
