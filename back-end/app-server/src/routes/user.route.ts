import { Router} from "express";
import userController from "../controllers/userController/user.controller";

const userRoute = Router();

userRoute.get('/users', new userController().getUsers)
userRoute.post('/users', new userController().createUser)

export default userRoute
