
<!DOCTYPE html>
<html lang="en">
<body>
  <input type="text"><br>
  <img src="">
  <script>
    var text = document.querySelector('input');
    var text2 = text.value;
      text.addEventListener('keydown',function(enter){
        if (enter.keyCode === 13) {
      var url = "http://randomuser.me";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.addEventListener('load', function() {
        var d = xhr.responseText
        var parsed = JSON.parse(d)
        console.log(parsed.results[0].user.email);
      }
      xhr.send();
      }
    })
  </script>
</body>
</html>
