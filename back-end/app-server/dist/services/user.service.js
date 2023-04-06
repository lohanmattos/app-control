"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const data_source_1 = require("../data-source");
const user_entities_1 = require("../entities/user/user.entities");
exports.userService = data_source_1.AppDataSource.getRepository(user_entities_1.User);
