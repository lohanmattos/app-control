import { Router } from "express";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware.ts ";
import authenticationController from "../controllers/authenticationController/authenticationController";


const authorizationRoute = Router();

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, new authenticationController().validateToken);
authorizationRoute.post('/token', basicAuthenticationMiddleware, new authenticationController().createToken);

export default authorizationRoute;