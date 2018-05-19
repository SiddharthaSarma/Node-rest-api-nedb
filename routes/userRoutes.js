import express from 'express';
const router = express.Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/usersController';

router
  .route('/')
  .get(getUsers)
  .post(createUser);

router
  .route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
