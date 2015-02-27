####Make a bare html (just a body) in js, add a h1 tag that  say "top 10 songs" add a ul of the top 10 songs from http://www.billboard.com/charts/hot-100

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <script src="assess1.js">

    </script>

  </body>
</html>
```

```js
debugger;
var arr = ["Taylor Swift - Blank Space","All About That Bass - Meghan Trainor","Take Me To Church - Hozier","Shake It Off - Taylor Swift","Animals - Maroon 5","The Heart Wants What It Wants - Selena Gomez","I'm Not The Only One -Sam Smith","Uptown Funk! - Mark Ronson Featuring Bruno Mars","Habits (Stay High) - Tove Lo","Love Me Harder - Ariana Grande & The Weeknd"]


var h1 = document.createElement("h1");
var ul = document.createElement("ul");
document.body.appendChild(h1);
h1.innerHTML = "Top 10 Songs!";
document.body.appendChild(ul);
arr.forEach(function(song)
{
  var li = document.createElement("li");
  li.innerHTML = song;
  ul.appendChild(li);
});
```
