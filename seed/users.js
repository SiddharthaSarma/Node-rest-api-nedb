const faker = require('faker');
const _ = require('lodash');
const UsersDB  = require('../models/db');

const users = [];
_.times(50, () => {
  users.push({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.state(),
  });
});

UsersDB.insert(users, (err, docs) => {
  console.log('Database created successfully');
});