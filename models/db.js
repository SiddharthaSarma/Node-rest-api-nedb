import Datastore from 'nedb';
export const UsersDB = new Datastore({
  filename: './database/users.db',
  autoload: true,
  timestampData: true
});
