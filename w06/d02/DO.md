# Digital Ocean Setup

1. Set up a DO account at  https://www.digitalocean.com/ . You will need a credit card for this. Use your discount code from [here](discount_codes.md).
  - After you confirm your email, you will have to put in a credit card. **There is a section called `Promo Code`, Put in your Promo code here!!**
2. Go to your terminal and type the following `cat ~/.ssh/id_rsa.pub`. Then copy the output (as in highlight it with your mouse and then cmd-c)
3. Click on `SSH keys` in the sidebar of the DO frontpage once you are logged in.
  - Click on the Blue `Add SSH Key` in the top right. (Do not follow their directions)
  - Where it says `Enter Name` just put in your name (you could just put in anything)
  - in the next box (where it has the placeholder text `Public SSH Key` paste in what was copied from step 2
  - click the big green button `Create SSH Key`
4. Click on the big green "Create Droplet" button on the left sidebar
  - For `Droplet Hostname` put in [your name].princesspeach.nyc (replacing [your name] with ... your name)
  - Under `Select Size` choose the $10/mo option (you have $250 on your discount code, so this is 25 months worth)
  - There is **only one more thing to change**, Under the `Add SSH Keys` select your name, make sure that it turns blue
  - That's it! hit the big `Create Droplet` button on the bottom
5. On the DO sidebar, click on `Droplets`
  - You should see the droplet you just created listed
  - Copy the `Ip Address` of that droplet
6. Back in your terminal, type `ssh root@[paste-ip-address-here]`
  - You're in! Hipchat Crawford this ip address
7. paste this code in ```bash <(wget -qO- http://gitlab.generalassemb.ly/princess-peach/install_fest/raw/master/install_script_ubuntu)```, it should take about 10 minutes.
  - once it is completed, ctrl-c out of that ssh session, and ssh back in. Then type `ruby -v`. If it says anything like `ruby 2.1.4p265 (2014-10-27 revision 48166) [x86_64-linux]` then you're good
8. For now, whenever you ssh to this DO box you have to do `ssh root@[your-ip-address]`.
  - Whenever you want to reach it in the browser you hit the url `http://[your-ip-address]:2000` (or another port other than 2000)
  - Also, whenever you need to connect to a websocket server hosted on this DO box the address would be `ws://[your-ip-address]:2000` (or another port other than 2000)`
