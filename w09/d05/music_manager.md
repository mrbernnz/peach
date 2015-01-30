# Create a Music Manager

Create a music manager web app (like Spotify or iTunes) in Sinatra.

Your music app needs to have a songs table.
Songs will have an id (INTEGER, primary key), title (TEXT), and album id. (INTEGER).

You must also have an albums table.
Albums will have ids(INTEGER, primary key), names (TEXT), and an artist id (INTEGER).

You must add an artist table.
Artists will have ids (INTEGER, primary key), and a name (TEXT).

You must use RESTful routes for your songs, artists, and albums (show/edit/index/create/update/delete).

Your artists page (/artists) will link to various artists.  When you click on an artist, it will go to to the artist show page (/artist/:id).
It will also have a form for adding new artists.

The artist show page will show the artist's name and a list of their albums.
Each album will link to the album show page (/album/:id).
It will also have a form for adding new albums.

The album page will show the album's name and a list of songs for that album.
It will also have a form for adding new songs.

Style it up with CSS as best as you can.

**Bonus:** Feel free to incorporate the Spotify API into your app.
For example, get albums for an artist through the API instead of adding them manually,
get artist descriptions,
get number of Spotify followers, etc.
