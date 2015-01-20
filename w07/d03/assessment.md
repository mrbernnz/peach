# Assessment

Write an EJS template
  * that takes an object with the name `obj` as a local, and with the keys
      * name
      * color
      * age
  * prints out in text:

```
Hello [name]!
You are [age] years old.
And your favorite color is [color].
```

1. 15 min
2. No html
3. Hipchat just the EJS template
4. Test it out if you have time

#### My Solution
```js
<h1>Hello <%=name%>!</h1> //the value of [key = name]
<p>You are <%=age%> years old.</p> //the value of [key = age]
<p> And your favorite color is <%=color%> //the value of [key = color]
```
