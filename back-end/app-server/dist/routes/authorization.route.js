"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basic_authentication_middleware_1 = __importDefault(require("../middlewares/basic-authentication.middleware"));
const jwt_authentication_middleware_ts_1 = __importDefault(require("../middlewares/jwt-authentication.middleware.ts "));
const authenticationController_1 = __importDefault(require("../controllers/authenticationController/authenticationController"));
const authorizationRoute = (0, express_1.Router)();
authorizationRoute.post('/token/validate', jwt_authentication_middleware_ts_1.default, new authenticationController_1.default().validateToken);
authorizationRoute.post('/token', basic_authentication_middleware_1.default, new authenticationController_1.default().createToken);
exports.default = authorizationRoute;
