###Objective
SQL

CREAT TABLE dwarfs (ID INTEGER PRIMARY KEY, name TEXT, color TEXT);
INSERT INTO dwarfs (name, color) VALUES('Happy', 'Yellow');
SELECT * FROM dwarfs;
SELECT * FROM dwarfs WHERE id=3;
UPDATE dwarfs SET name='Sniffly', color='Green' WHERE id=7;
UPDATE dwarfs SET color='Grey' WHERE color='Yellow';
