CREATE TABLE houses (id INTEGER PRIMARY KEY, name TEXT, region TEXT, sigil_url TEXT);

CREATE TABLE characters (id INTEGER PRIMARY KEY, name TEXT, image_url TEXT, house_id INTEGER references houses);

