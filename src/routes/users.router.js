import usersController from '../controllers/usersController.js';
import express from 'express';

const userRouter = express.Router();
userRouter.get('/', usersController.getAllUsers);

userRouter.get('/:id', usersController.getAllUsers);

userRouter.post('/', usersController.createUser);

userRouter.put('/:id', usersController.updateUser);

userRouter.delete('/:id', usersController.deleteUser);

export default userRouter;
