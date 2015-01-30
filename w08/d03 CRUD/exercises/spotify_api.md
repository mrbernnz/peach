# Spotify API

You are going to write a website for searching for an artist on Spotify.  

You will have:
- a heading asking the user to enter an artist.
- An input field and a button for searching for an artist.

When you click the button, submit an AJAX request to the Spotify API to search for the artist.
For example:
https://api.spotify.com/v1/search?q=artist:rolling+stones&type=artist

You will replace rolling+stones with the artist that is entered into the field.  Remember that you need a to replace artists that contain a space with a +.  
Red+Hot+Chili+Peppers, for example.

When you get a response, render the following on the page:
1. The name of the band
2. The image from the first result

**Hint**: If you look at the response, there is an array of items and the first item will have an array of images.  You can just grab the first one or you can find one that matches the size you want for your page.

**Other hint**: You will need the id of the artist for the next part.  You should see that right above the images.

When you click on the image, submit another AJAX request to the Spotify API to search for albums of that artist.
For example:
https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe/albums

Note: The bit after artists is the id of that artist.

When you get a response, replace the image of the artist with:
  1. The name of the first album
  2. The image from the first album

## Bonuses
- Render all search results for the artist
- Render all album results when you click on the album.
- Render additional info for the artists
  - Examples include: How many followers on Spotify, popularity, genres
