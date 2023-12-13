import usersController from "../controllers/users.controller.js";
import express from 'express';

const userRouter = express.Router();
userRouter.get('/', usersController.getAllUsers );

userRouter.get('/:id', usersController.getOneUser);

userRouter.post('/', usersController.createUser);

userRouter.put('/:id', usersController.updateUser);

userRouter.delete('/:id', usersController.deleteUser);

export default userRouter;
