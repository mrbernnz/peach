## Chat App

This is your first weekly project. Everybody is expected to complete it by Monday morning. After all of the apps have been submitted we will make a compilation of them in order to show them off (just like we did for the Canvas work).

#### Core Requirements
  1. It must be in the browser
  2. You must create both the client code and the server code
  3. The client must have be stylized. You determine how much effort you want to invest in this, but looks can make a big difference.

#### Server Requirements
  1. Support multiple clients
  2. Handle disconnections
  3. Print all incoming messages to the terminal
  4. It should support banned words whereby if anybody sends a message with that banned word they are kicked off the server. Examples of banned words might be `unctious` or `dollop`.
  4. It should not support input from the user in the terminal (server's usually don't do that stuff, we've just been doing it for convenience)


#### Client Requirements
  1. Support input from the user (e.g. an input box)
  2. Allow the user to set and/or change their name
  3. Have at least one special command supported that the user could enter in as a message and their message be transformed. Here are some examples:
    - `/yell i am so cool` could produce the message `I AM SO COOL`.
    - `(yell) i am so cool` could produce `I AM SO COOL`
    - `(yell)` (with no proceeding message) turns into `AHHHHH!!!`
    - `(table flip)` could turn into `(╯°□°）╯︵ ┻━┻`
  4. Render basic URLs as hyperlinks.
    - For instance if the user or some other person in the chatroom types `http://about.me` it should render in the chatroom window the link [http://about.me](http://about.me)
  5. Render Image URLs as `<img>` tags
    - If the user or some other person in the chatroom types `http://catpictures.com/cat.png` it should render that actual image in the chat window (just like hipchat would)
    - **Hint:** you can tell whether a link is an image because the very last characters of the url (link address) are png or bmp or jpg . E.g. http://animalia-life.com/data_images/wallpaper/cat-wallpaper/cat-wallpaper-01.jpg

#### Enhancements

The rest is up to your imagination. But to give you an idea of what you could do, here are some challenges:

  - You could support rendering gifs
  - Allow users to boot each other off the server. For instance the message `/kick jack` could maybe tell the server to kick the user jack off of the server
  - Supporting coloring your message. The message `/red Hello` could encode `Hello` in red.
  - When the message `(cat)` is received the chat client could render in the chat messages a random picture of a cat from [placekitten](http://placekitten.com/), such as [this picture](https://placekitten.com/g/300/400). The way placekitten works is you just create an `<img>` tag and set the src to a placekitten URL with the last two numbers set to the width and height of the picture that you want, like `https://placekitten.com/g/300/400`. This `<img>` tag will then be a picture of a cat with those width and height dimensions (in the URL given it would be a width of 300 and a height of 400)

Of course there are many things you could try to do that may be pretty hard. For instance:
  - Can you devise a way in which a user could send a private message to another user?
  - Would you be able to send a message to just a group of users?
  - Better yet, could you figure out how to make multiple chat rooms? (That one is probably very hard).
