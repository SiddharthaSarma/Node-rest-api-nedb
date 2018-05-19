import { omit } from 'lodash';
import { UsersDB } from '../models/db';

// Get all users details
export const getUsers = (req, res, next) => {
  UsersDB.find(
    {},
    {
      updatedAt: 0,
      createdAt: 0
    },
    (err, users) => {
      res.status(200).json(users);
    }
  );
};

// Get a single user details
export const getUser = (req, res, next) => {
  UsersDB.find(
    {
      _id: req.params.userId
    },
    {
      updatedAt: 0,
      createdAt: 0
    },
    (err, user) => {
      res.status(200).json(user);
    }
  );
};

// Create a new user
export const createUser = (req, res, next) => {
  let user = ({ name, email, phoneNumber, street, city, state } = req.body);

  UsersDB.insert(user, (err, newUser) => {
    let result = omit(newUser, ['updatedAt', 'createdAt']);
    res.status(200).json(result);
  });
};

// Update user's details.
export const updateUser = (req, res, next) => {
  let id = req.params.userId;
  let user = ({ name, email, phoneNumber, street, city, state } = req.body);

  UsersDB.update(
    {
      _id: id
    },
    {
      $set: user
    },
    (err, newUser) => {
      res.status(200).json({
        success: true
      });
    }
  );
};

// Delete user
export const deleteUser = (req, res, next) => {
  let id = req.params.userId;
  UsersDB.remove(
    {
      _id: id
    },
    {},
    (err, numRemoved) => {
      res.status(200).json({
        success: true
      });
    }
  );
};
