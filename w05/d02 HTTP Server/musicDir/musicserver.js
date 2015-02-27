// Write a music directory
//
// Create an http server that responds to the following paths:
//
// /artists - returns a list of at least 3 artists
// /artists/[ARTIST NAME] - returns an unordered list of at least 2 of said artist's albums
// /artists/[ARTIST NAME]/[ALBUM NAME] - returns an unordered list of at least 3 songs from the album.
// For example, you might have the following path /artists/Joanna_Newsome/Ys that displays a list of 3 songs from the ablum Ys.
//
// Put this server code up on your digital ocean server running on whatever port you'd like. Be sure to push up to Github your code in order to accomplish this.
//
// Note: You do NOT need to style these.
//
// Bonus #1: Have each page link to /artists, and have each parent link to each of its children (So for instance /artists would contain a list of 3 links to /artist/[ARTIST NAME])
//
// Bonus #2: Create the function arrayToUl that takes an array of strings and returns a string containing the html for an unordered list where each list item is an element of the array. Use this function to construct the html all of your html responses.
//
// Super Bonus: Make an object with an artist name for each key and an array of albums for each value. Make a similiar object where each Album name is a key that points to an array of 3 songs. Use these objects to contruct the html that you send back to the browser.

var message = "";
var http = require("http");
var server = http.createServer(function(request,response)
{
  var path = request.url;
  console.log(path);
  var parent = path.split("/")[1];
  var headline = path.split("/")[2];
  console.log(headline);
  if (parent==="tortilla" && headline==="rice")
    {
      message = '<html><body><h1>MMMMM</h1></body></html>';
    }
    else if (parent==="tortilla" && headline==="guac")
      {
        message = '<html><body><h1>AHHHH</h1></body></html>';
      }
      else if (parent==="tortilla" && headline!=="")
        {
          message = '<html><body><h1>Well, ' + headline + ' is good on a tortilla, too.</h1></body></html>';
        }
        else
          {
            message = "Missing something..."
          }
          // message = "<h1>" + headline + "</h1>"; I could use this instead.
          response.end(message);
        });
        server.listen(2000);
