import { AppDataSource } from "../data-source";
import { User } from "../entities/user/user.entities";

export const userService = AppDataSource.getRepository(User);