# Assessment
As you complete each action in this assessment copy the command and paste it into a file. Once you are done with all of the steps copy the contents of the file, paste it into hipchat, and send it to Sam.

- Create a sqlite3 database called IKEA.
- open it in sqlite3 and add a table called "chairs".
- chairs should have a column for an id assigned by sqlite3, a column called color that takes a string, and a column called legs that takes an integer.

Insert the following chairs into the table:
- a green chair with 4 legs
- a blue chair with 4 legs
- a yellow chair with 3 legs
- a blue chair with 3 legs
- a green chair with 3 legs


Next:
- retrieve all entries from chairs
- retrieve all entries from chairs that have a color of blue
- remove the blue chair with 3 legs using its id
- add a chartreuse chair with 2 legs

##Solution
- sqlite3 IKEA.db
- CREATE TABLE chairs (ID INTEGER PRIMARY KEY, color TEXT, legs INTEGER);
- INSERT INTO chairs (color, legs) VALUES('green',4),('blue',4),('yellow',3),('blue',3),('green',3)
- SELECT * FROM chairs;
1|green|4
2|blue|4
3|yellow|3
4|blue|3
5|green|3
- SELECT * FROM chairs WHERE color='blue';
2|blue|4
4|blue|3
- DELETE FROM chairs WHERE ID=4;
-1|green|4
2|blue|4
3|yellow|3
5|green|3
6|chartreuse|2
- INSERT INTO chairs (color,legs) VALUES('chartreuse',2);
