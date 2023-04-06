"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const user_service_1 = require("../services/user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function basicAuthenticationMiddleware(req, res, next) {
    try {
        const authorizationHeader = req.headers["authorization"];
        if (!authorizationHeader) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Credencias não informadas" });
        }
        const [authorizationType, token] = authorizationHeader.split(' ');
        if (authorizationType !== 'Basic' || !token) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Tipo de autenticação invalida" });
        }
        const tokenContent = Buffer.from(token, 'base64').toString('utf8');
        const [username, password] = tokenContent.split(':');
        if (!username || !password) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Credencias não preenchidas" });
        }
        const user = await user_service_1.userService.findOne({
            where: { username: username }, relations: {
                employee: true
            }
        });
        const isPasswordValid = await bcrypt_1.default.compare(password, String(user === null || user === void 0 ? void 0 : user.password));
        if (!isPasswordValid) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Usuario ou senha invalidos" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        next(error);
    }
}
exports.default = basicAuthenticationMiddleware;
