$(function()
{
  // An object to store our images
  var imgs =
  {
    leather: new Image(),
    canvas: new Image()
  };
  // An object to store our canvases
  var canvases = {};
  // Counts how many images are loaded.
  var imgsLoaded = 0;
  // Loop over each of the imgs and insert it into the hidden container.
  $.each(imgs, function(index, img)
  {
    $('#hidden-container').append(img);
    // Once the image is loaded we create a canvas the exact size of our images
    img.onload = function()
    {
      canvases[index] = $("<canvas />");
      canvases[index]
      .attr('width', img.clientWidth)   // Set the height of the canvas to the img height
      .attr('height', img.clientHeight) // same with width.
      .attr('id', index)                // Give it an id according to our texture
      .addClass('texture');             // And a class of 'texture'
      $('body').append(canvases[index]);    // Append it to our document body

      // We then draw the image on our canvas
      canvases[index].get(0).getContext('2d').drawImage(img, 0, 0);
      imgsLoaded++;
      if(imgsLoaded === Object.keys(imgs).length)
      {
        // Do something
      }
    }
  });

  // And here we set the src attribute of each image
  imgs.leather.src = 'img/leather.png';
  imgs.canvas.src = 'img/canvas.png';
});
