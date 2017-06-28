const Datastore = require('nedb');
const users = new Datastore({
    filename: './database/users.db',
    autoload: true,
    timestampData: true
});

module.exports = users;