## The Internet: In the beginning
- [J. C. R. Licklider](http://en.wikipedia.org/wiki/J._C._R._Licklider)
- [Man-Computer Symbiosis](http://groups.csail.mit.edu/medg/people/psz/Licklider.html)
- [Intergalactic Computer Network](http://worrydream.com/refs/Licklider-IntergalacticNetwork.pdf)
  - [Wikipedia entry](http://en.wikipedia.org/wiki/Intergalactic_Computer_Network)
- [ARPANET map (1977)](http://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map%2C_march_1977.png)

## IP Addresses
- [Your IP Address](https://www.google.com/search?q=ip+address)

## SSH
Every student has been provided with a [Digital Ocean](https://www.digitalocean.com/) server.

To connect to your server:
  - ```ssh root@[your-name].princesspeach.nyc```
  - type ```yes``` at the prompt
  - you will be prompted for a password. Enter in the password that was given to you.

## Game: Guess my name

**Cheatsheet**
  - [list of student names](students.md)

Every person will be hipchatted whether they should play the role of server or client. The goal of this game is for the person playing the client to connect through TCP to the server and guess the name of the person with the server. The client must figure out the person's name through clever questions.

Some questions defeat the purpose of the game, like asking about the person's location in the room. The person playing the server is encouraged to respond with ```too easy```.

After the client has correctly guessed the server's name, the roles should shift and the game is played again.

If you are a server:
  - ssh to your server
  - ```nc -l 3000```

If you are a client:
  - you will be hipchatted an ip-address
  - on your local computer: ```nc [ip-address] 3000```

## Activity: Web Ring
*[Web Rings Wikipedia Entry](http://en.wikipedia.org/wiki/Webring)*

Create a webpage with:
- Your name
- 2 true facts about yourself
- 1 false fact about yourself
- Each fact should have a checkbox next to it that the user can select
- If the user selects the two truthful facts tell them that they are correct (or have won, or are amazing)
- If the user happens to check the false fact then inform them that they are incorrect (or have lost, or are a bad person)
- Try to add some personality to your site and to the message you give your user (e.g. change the background color to red if they lost or play a crazy sound).

Complete the Web Ring:
- Find the location of your name in this [list of student names](students.md). Note the name of the student **below** your name (wrap around to the top if you are the last name).
- On your webpage create a hyperlink to this other student's webpage. Assume that their webpage is hosted on a server at ```http://[their-name].princesspeach.nyc:8080```
- Note that this other student's page might not be hosted **while** you are making your webpage, so the link won't work at first.

Host your web page:
- push your web page to a new github repo
- ssh to your server and run these commands:

  ```
  git clone [your-github-repo-address]
  cd [your-repo-name]
  npm install -g http-server
  http-server
  ```

- now check out your webpage ```http://[your-name].princesspeach.nyc:8080``` or any other student's webpage and surf the web ring!


## Game: All Together Now

You and every other student will be hipchatted a secret word. The goal of this game is to coordinate with each other **only** through the use of TCP to figure out every student's secret word.

You have two TCP tools that you can use:
  1. [TCPChat](https://github.com/sean-west/tcpchat)
  2. ```nc [other-students-name].princesspeach.nyc 3000```

For this to work, key students need to have the initiative to create a chatroom using ```TCPChat```. To do this you need to:
  - ssh to your server
  - follow the installation instructions on the [TCPChat](https://github.com/sean-west/tcpchat) Github repo
  - start the server as documented on the Github page

**You cannot** coordinate by audibly talking to each other or through hipchat. You can only guess which student's might have a chatroom running and try to coordinate with them there. Be sure to share with each other in the chatrooms all the secret words you have found so far.
