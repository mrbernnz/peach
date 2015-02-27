var bookshelf = function()
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
  // Loop over each of the imgs and insert it into the
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
    }
  });

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
  if(imgsLoaded === Object.keys(imgs).length)
    {
    // Do something
    var $book = makeBook({text: "Hello", texture: canvases['leather']});
    $('#bookcase').append($book);
    }

// And here we set the src attribute of each image
imgs.leather.src = 'leather.png';
imgs.canvas.src = 'canvas.png';
}

function makeBook (options)
{
  // We need a texture to apply to the book.
  if(typeof options.texture === "undefined") return false;
  // Our default options
  options = $.extend(true,
    {
      text: "",
      color: "#B8293B",
      height: 200,
      width: 32
    }, options);
    // This gets our container height
    var contHeight = $('#bookcase').height();

    // Here we create our text and book elements.
    var $text = $('<span class="booktext">' + options.text + '</span>');
    var $book = $('<div class="book" />');
    // And we set the book properties as set in options.
    $book.height(options.height);
    $book.width(options.width);
    // Here we use jQuery $.offset() to position our book resting on the 'shelf'
    $book.offset({top: contHeight - options.height});

    // Now we create our book texture
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    // We set the properties of our canvas according to our options
    canvas.className = 'canvas-texture';
    canvas.width = options.width;
    canvas.height = options.height;
    context.fillStyle = options.color;
    // And then we append it to our book
    $book.append(canvas);
    // Fill with a basic colour
    context.fillRect(0, 0, options.width, options.height);

    // Overlay our texture onto the book.
    options.texture.get(0).getContext('2d').blendOnto(context,'overlay');

    // Add our text to the book.
    $book.append($text);

    // Return our book (note this is a jQuery object!)
    // return $book;
}

function addBooks (books)
{
  $.each(books, function(i, book)
  {
    $('#bookcase').append(makeBook(book));
  });
  if(imgsLoaded === Object.keys(imgs).length)
    {
      var books =
      [
      { text: 'Hello', height: 320, width: 40, color: '#327', texture: canvases.leather },
      { text: 'World', texture: canvases.canvas }
      ];
      addBooks(books);
    }
  }
