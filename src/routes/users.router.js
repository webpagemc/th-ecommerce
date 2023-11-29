import express from "express";
import userController from "../controllers/users.controller.js";

const userRouter = express.Router();

userRouter.get("/",userController.getAllUsers);

userRouter.get("/:id", userController.getUserById );

userRouter.post("/", userController.createUser);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

export default userRouter;