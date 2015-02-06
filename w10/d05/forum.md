## Build a forum

Using rails, build a forum that has multiple posts (sorry, _entries_) from multiple users. Build the forum in the following order:
- Create a database with a forum table that holds an id, a timestamp, a title, and content.
- ```/``` shows all forum titles in reverse chronological order (most recent post first!).
- Each title should link to a show page that contains the title, content, the time that the entry was created, and the last time the entry was updated.
- A user can go to ```/entries/new``` and create a new forum entry's title and content.
- When a user goes to ```/entries/:id``` not only do they see the corresponding entry, but they can edit it or delete it as well.

### Bonus
If you get the previous specs working, do the following:
- Add a user table to your database that holds at least an id and user_name. Create a migration to do this!
- Add author_id to the forum table, it should reference user's id. Again, create a migration to do this.
- Add a login section to ```/```, so a user can (surprise!) log in.
- Change ```/``` so it only shows the first 200 characters of each entry, as well as the author and time the corresponding entry was last updated. If there are no updates to the entry display the timestamp of when it was created instead.
- Change ```/entries/new``` so only a logged in user can create a new entry.
- Change ```/entries/:id``` so that only the user who created the entry can edit or delete the entry.

### Super Bonus
If you get the previous specs working, add the following:
- Determine how to persist comments.
- Allow users to add comments to entries.
- Only the user who created a particular comment can edit that comment.
- The creator of the comment can delete it, as well as the creator of the entry.
- All comments for a particular entry should be deleted if the entry is deleted.
