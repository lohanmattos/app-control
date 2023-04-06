"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_codes_1 = require("http-status-codes");
const user_service_1 = require("../../services/user.service");
require("dotenv/config");
const user_entities_1 = require("../../entities/user/user.entities");
class userController {
    async createUser(req, res) {
        try {
            const { username, password, email } = req.body;
            const passwordEnclipt = await bcrypt_1.default.hash(password, Number(process.env.KEY));
            if (!username || username.length < 3) {
                return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ erro: "O nome está vazio." });
            }
            const isExist = await user_service_1.userService.findOne({
                where: {
                    username: username
                }
            });
            if (!(isExist === null || isExist === void 0 ? void 0 : isExist.username)) {
                if (!(isExist === null || isExist === void 0 ? void 0 : isExist.email)) {
                    const newUser = {
                        username: username,
                        password: passwordEnclipt,
                        email: email,
                    };
                    const createUser = user_service_1.userService.create(newUser);
                    await user_service_1.userService.save(newUser);
                    res.status(http_status_codes_1.StatusCodes.CREATED).json(newUser);
                }
            }
            else {
                return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ Erro: "Usuário já Existe." });
            }
        }
        catch (error) {
            return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ Error: "E-mail já Existe" });
        }
    }
    ;
    async findAllUsers(req, res) {
        const findAllUsers = await user_service_1.userService.find({
            relations: {
                employee: true,
            }
        });
        res.status(http_status_codes_1.StatusCodes.OK).json(findAllUsers);
    }
    async updateUser(req, res) {
        try {
            const idUser = req.params.id;
            const { password, email } = req.body;
            const passwordEnclipt = await bcrypt_1.default.hash(password, Number(process.env.KEY));
            const isUserExist = await user_service_1.userService.findOneBy({ id: Number(idUser) });
            console.log(isUserExist);
            if (isUserExist) {
                const userEdit = await user_service_1.userService
                    .createQueryBuilder()
                    .update(user_entities_1.User)
                    .set({ password: passwordEnclipt, email: email })
                    .where("id = :id", { id: idUser })
                    .execute();
                return res.status(http_status_codes_1.StatusCodes.OK).json({ mesasagem: "Usuario editado com sucesso.", userEdit });
            }
            return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ Error: "Usuario não existe" });
        }
        catch (error) {
            return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ Error: error });
        }
    }
    async findById(req, res) {
        try {
            const idUser = Number(req.params.id);
            const results = await user_service_1.userService.findOneBy({ id: idUser });
            return res.status(http_status_codes_1.StatusCodes.OK).json(results);
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = userController;
