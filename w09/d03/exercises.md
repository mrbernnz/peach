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
