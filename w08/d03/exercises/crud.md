## CRUD

CRUD stands for Create, Read, Update, and Destroy, which are all the basic operations you can do to a persistant data resource.

For instance, one could create an API to keep track of pets where they could

1. Create a pet (add another pet to track)
2. Read the information about a pet (e.g. `{name: 'Fluffy', type: 'dog'}`)
3. Update a pet (e.g. change 'Fluffy's name to 'McFluff')
4. Destroy the pet item (but not the pet!)

Let's create this Pet API with the following routes

* `/create/:pet_name/:pet_type`
  * adds a new pet with the specific name and type
  * returns in JSON the object {"status": "Success!"}
* `/read/:pet_name`
  * returns an object with one key of a pet's name. If no pet exists with this name then return an empty object.
* `/update/:pet_name/:new_pet_name`
  * changes the name of a pet
  * returns in JSON the object {"status": "Success!"}
* `/destroy/:pet_name`
  * removes a pet by the name pet_name
  * returns in JSON the object {"status": "Success!"} if the pet existed
  * returns {"status": "A pet by that name does not exist."} if no pet by that name was found
* `/all_pets`
  * returns an array of all the pet objects in JSON

How can we do this without a database? You could just have an array or hash/object of individual pet objects on the server.

### Challenge 1: File persistance:

Arrays and objects are an example of in-memory persistance, which means it will be gone after the server is shutdown. We can be even more persistant than that by:
1. Serializing the array/object of pets to JSON and then writing it to a file after every operation.
2. Reading the array from a JSON file when the server starts up.

### Challenge 2: LevelDB (Part of the Lebron Stack)

LevelDB is a database that is used by the node cool kids. Its kind of like a big ole hash. The most common way to use leveldb in node is with the [node-levelup](https://github.com/rvagg/node-levelup) package.

Can you figure out how to use LevelDB to persist the pets?
