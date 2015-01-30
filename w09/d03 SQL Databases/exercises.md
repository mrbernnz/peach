# SQLite 3

# Instructor Notes:
Today we are going to learn about databases.  
Databases allow us to store and persist data so that we can access it even after our server restarts.

So far, we have looked at in memory objects like arrays and hashes.
  - These don't persist after the server shuts down
  - They also can get really complex and hard to maintain.

We have also looked at storing our hashes/arrays in files.
  - This is still done for certain types of things, but can also get really complex and messy.

This brings us to databases.
Databases can store our data on the server side (or on a remote server).
  - They are typically optimized for performance and speed
  - We don't have to worry as much about the structure of our data
  - Finally, we can access it from other apps that might need to access it.

Many databases use the Structured Query Language, or SQL standard language for performing CRUD operations on the database.
  - This isn't true for all databases (for example, Mongo DB or Level DB), but is used in Postgres, MySQL, and SQLite.

We are going to be using SQLite, which is an easy to set up database that stores its data in files.

To begin, create a directory called dwarves.

Go into that directory and type:
`sqlite3 dwarfs.db` and hit enter.

You should see a prompt for a command (like IRB or the Node REPL).
  - If you don't, you can run
  `brew install sqlite3`

We just created a database called dwarves.db.
  - In SQLite, databases are stored in files instead of on servers like many other types of SQL databases
  - this makes it a little more portable since you can store it and, say, push it to Github
    - but it's not so great if multiple services want to access the same database

A database contains one or more tables.
Tables are sort of like spreadsheets that have multiple columns that specify attributes, and multiple rows that specify entrees in the database.

Let's create a table.
Type the following:

`CREATE TABLE dwarfs (id INTEGER PRIMARY KEY, name TEXT, color TEXT);` and hit enter.

SQL is generally case-insensitive but commands are typically written in CAPS to distinguish them from table or column names.

We also need to end most statements with a semi-colon.

CREATE TABLE is the command to create a table.

Dwarfs is the name of the table.

id, name, and color are all column names for the table.

We specify the types right after the column name.  Id is an integer, name and color contain text (like a String).
Id is also a primary key, which ensures that it's unique.  Sqlite will automatically insert an id into your rows, so you don't have to worry about that.

If you run `.schema dwarfs`, you'll see the create statement for Dwarfs.  It may be useful if you forget which columns are in the table.

Now let's insert a row into the table.
With REST API routes, this would look like `POST /dwarf`.

In SQLite, you can run this:
`INSERT INTO dwarfs (name, color) VALUES("Happy", "yellow");`

Now that we have a row, how do we see what our table looks like?

In REST, this looks like `GET /dwarfs`.

In SQLite, you can run this:
`SELECT * FROM dwarfs;`
You should see this:
`1|Happy|yellow`

`*` is a wildcard that basically says select all the from the Dwarfs table.

# Exercise: Add the rest of the Dwarfs
Insert the following Dwarfs into the table:

| name  | color  |
|-------| ------ |
|Dopey  | purple |
|Sneezy | yellow |
|Grumpy | brown  |
|Doc    | brown  |
|Sleepy | blue   |
|Bashful| blue   |

# Instruction Notes:
Run `SELECT * FROM dwarfs;` to see all the dwarfs in the database.

Now that we have 7 Dwarfs, what if we only want to show one?

In REST, this looks like `GET /dwarf/:id`.

In SQLite, you can run this:
`SELECT * FROM dwarfs WHERE id = 3;`

You should see
`3|Sneezy|yellow`

WHERE clauses add conditions to SELECT queries to narrow down the results.  In this case, we are looking for the result with the ID of 3.

We could also do something like this:
`SELECT * FROM Dwarfs WHERE color = "brown";`

You should see
```
4|Grumpy|brown
5|Doc|brown
```
What if we want to update a dwarf?
In REST, this looks like `PUT /dwarf/:id`
In SQLite, you can run this:
`UPDATE dwarfs SET name = "Sniffy", color = "green" WHERE id = 7;`

Use `SELECT * FROM dwarfs WHERE id = 7;` to see the change.

Once again, we used the where clause to specify a condition for which records to change.

We could also do this:
`UPDATE dwarfs SET color = "gray" WHERE color = "yellow";`

Use `SELECT * FROM dwarfs;` to see the results.
# Exercise: Change the dwarfs
Make the following changes to your table:  
1. Change Grumpy's name to Grouchy  
2. Change Sleepy's name to Dreamy  
3. Change Bashful's name to Shy  
4. Change Dopey's color to lavender  
5. Change Shy's (formerly Dreamy's) color to Violet  
6. Change Grouchy's name to maroon.

Use `SELECT * FROM dwarfs;` to see the results.

# Self-guided exercise:

Using google (or duckduckgo, i guess) learn how to have sql automatically add a timestamp of the time and date to your dwarfs when an entry is created or updated. To do this successfully you'll need to learn how to add a column to your table as well.

# Write a rolodex command line application with sql
Create a new ruby file and paste the following skeleton code into it. Use it to write a command line rolodex application. Anything wrapped in && should be replaced with code as indicated.

The skeleton:
```
require 'sqlite3'
# http://www.rubydoc.info/gems/sqlite3/1.3.10
require 'pry'
# select a database, or create it if it does not yet exist
db = SQLite3::Database.new "rolodex.db"

# if this is the first time running the code this table will be created, otherwise this step will be skipped
rows = db.execute <<-SQL
create table if not exists friends (
  && an ID that is assigned by the database &&
  && a field called name that stores text &&
  && a field called phone that stores integers &&
  );
  SQL

  # the meat and potatoes
  puts "what would you like to do? (C)reate, (R)ead, (U)pdate, or (D)estroy?"
  response = gets.chomp.downcase
  # create an entry
  if response == 'c'
  puts "person's name, please"
  name = gets.chomp.downcase
  puts "person's phone number, please"
  phone = gets.chomp
  # the actual code to insert the new entry
  db.execute("INSERT INTO friends (name, phone) VALUES (?, ?)", name, phone)
  # since the entry automatically happens at the end of the table, we can now select the last entry and display it so the user can see that their entry worked.
  person = db.execute(&& a select command that takes just the name and phone info from the last entry of friends &&)
  && display the person's name and number in the following format: "so-and-so's number is xxxxxxxxx" &&
  end
  # look everyone up
  if response == 'r'
  # grab only the name and phone number of everyone and display them
  all = db.execute(&& a select command that takes just the name and phone info from all entries &&)
  all.each do |entry|
  && display all entries with the following format: "so-and-so's phone number is xxxxxxx" &&
  end
  end
  # update an entry
  if response == 'u'
  # get a list of everyone so we can select the correct person by id
  all = db.execute(&& A select command that gets the id, name, and phone number from all entries &&)
  # loop through the names and print them to the terminal
  all.each do |entry|
  && display each entry int he following format:"so-and-so's number is xxxxxx. To select so-and-so, enter THE ID OF SO-AND-SO(this should be their primary key)" &&
  end
  # grab an id and new phone number from the user
  puts "which id will you update?"
  id = gets.chomp.downcase
  puts "what is their new number?"
  number = gets.chomp
  # update the entry
  db.execute(&& use an update command to change the phone number of the id given by the user &&)
  # get the updated entry so the user can see that the change happened
  person = db.execute(&& use a select command to get the name and new phone number from the given id &&)
  && display the person's name and number in the following format: "so-and-so's number is now xxxxxx" &&
  end
  # delete an entry
  if response == 'd'
  # get a list of everyone so we can select the correct person by id
  all = db.execute(&& use a select command to get all entries' id, name, and phone number &&)
  all.each do |entry|
  && display each entry int he following format:"so-and-so's number is xxxxxx. To select so-and-so, enter THE ID OF SO-AND-SO(this should be their primary key)" &&
  end
  puts "which id will you delete?"
  id = gets.chomp.downcase
  # delete the entry
  db.execute(&& use a delete command to remove the entry with the id supplied by the user &&)
  puts "buuuuurn"
  end
  ```


# Further exercises:

### Part 1: Fun with tables
  - do the following steps in the terminal.
  - Create a file called ```outputs.txt```. Throughout this exercise you will be copying output from your terminal after running a specific command and pasting it into this ```outputs.txt```.
  - Create a database called ```tablefun```
  - Create the following tables **in that database** with the specified fields
  - *Schools Table*:
  - Create a table called ```schools```
  - Add the fields ```name```, ```city```, and ```state```. Each being of type ```text```
  - Add the field ```zip``` as an ```int```
  - Add 3 schools with different data into the table
  - Select all schools and copy and paste the output in the terminal to ```outputs.txt```
  - Show the structure of the table by typing ```PRAGMA table_info(TABLE_NAME)``` and copy and paste this output into ```outputs.txt```
  - **Bonus** change every school's name to "Manhattan High". Select all schools again and copy and paste this output into ```outputs.txt```
  - *Teachers Table*:
  - Create a table called ```teachers```
  - Add the fields ```name```, ```email```, and ```subject```. Each being of type ```text```
  - Add the field ```age``` as an ```int```
  - Add 2 teachers with the subject ```math``` and 4 teachers in various other subjects
  - Select all teachers and copy and paste the output in the terminal to ```outputs.txt```
  - Show the schema of the table by typing ```.schema TABLE_NAME``` and copy and paste this output into ```outputs.txt```
  - **Bonus** update every math teacher to be 40 years old. Put the SQL statement you used into your ```outputs.txt```
  - **Bonus** delete all math teachers. Copy and paste the SQL statement you used into ```outputs.txt```


  ###Part 2: Writeup

  - Create a file called ```writeup.txt``` to record your answers to the following questions:
  - In your own words: what is a database?
  - List some problems with using files instead of a database
  - What is a schema (google may confuse you here)
  - When you are not specifically adding/deleting or querying your database, is it still running?


  ## Apply your knowledge to the pets exercise from monday
  - your table should include an id supplied by the database, a name column, a type column, a created_at column, and an updated_at column.
  - create this table in a ```seed.sql``` file for your app that includes a trigger for updating timestamps when an entry is updated.
  - Don't forget to include ```db = SQLite3::Database.new YOUR_DB_NAME_HERE```, but you shouldn't set the table in the server like we did in the rolodex exercise; your ```seed.sql``` took care of that for you.
  
## Integrate sqlite into your previous (or future previous) projects
- as you see fit
