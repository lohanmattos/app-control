"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/userController/user.controller"));
const userRoute = (0, express_1.Router)();
userRoute.get('/users', new user_controller_1.default().findAllUsers);
userRoute.get('/user/:id', new user_controller_1.default().findById);
userRoute.post('/users', new user_controller_1.default().createUser);
userRoute.patch('/user/:id', new user_controller_1.default().updateUser);
exports.default = userRoute;
