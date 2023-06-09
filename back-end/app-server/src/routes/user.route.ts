import { Router} from "express";
import userController from "../controllers/userController/user.controller";

const userRoute = Router();

userRoute.get('/users', new userController().findAllUsers)
userRoute.get('/user/:id', new userController().findById)
userRoute.post('/users', new userController().createUser)
userRoute.patch('/user/:id', new userController().updateUser)

export default userRoute