create table cities(
  id INTEGER primary key,
  name TEXT
);

create table persons(
  id INTEGER primary key,
  name TEXT,
  city_id INTEGER references cities
);


INSERT INTO cities (name) VALUES ('Detroit');
INSERT INTO cities (name) VALUES ('Seattle');
INSERT INTO cities (name) VALUES ('NewYorkCity');
INSERT INTO cities (name) VALUES ('Boston');

INSERT INTO persons (name, city_id) VALUES ('Jim Bob', 1);
INSERT INTO persons (name, city_id) VALUES ('Horseshoe Steve', 1);
INSERT INTO persons (name, city_id) VALUES ('Carolyn Nairne', 2);
INSERT INTO persons (name, city_id) VALUES ('Cowboy Roy', 2);
INSERT INTO persons (name, city_id) VALUES ('Sassy Sue', 2);
INSERT INTO persons (name) VALUES ('Nice Ned');
INSERT INTO persons (name, city_id) VALUES ('Frank Frank', 2);
INSERT INTO persons (name) VALUES ('Evil Michelle');
INSERT INTO persons (name, city_id) VALUES ('Laura Story', 2);
INSERT INTO persons (name, city_id) VALUES ('Sarah Patterson', 3);
INSERT INTO persons (name, city_id) VALUES ('Erica Badu', 4);
