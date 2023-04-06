"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_service_1 = require("../../services/user.service");
class authenticationController {
    async createToken(req, res) {
        try {
            const user = req.user;
            if (!user) {
                return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Usuario não informado" });
            }
            const jwtPayload = { username: user.username };
            const jwtOptions = { subject: `${user.id}` };
            const jwtSecret = "my_secret_key";
            const jwt = jsonwebtoken_1.default.sign(jwtPayload, jwtSecret, jwtOptions);
            res.status(http_status_codes_1.StatusCodes.OK).json({ user, jwt });
        }
        catch (error) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: error });
        }
    }
    async validateToken(req, res) {
        const user = req.user;
        const isToken = await user_service_1.userService.findOne({
            where: { id: user.id }, relations: {
                employee: {
                    section: true
                }
            }
        });
        res.status(http_status_codes_1.StatusCodes.OK).json({ isToken });
    }
}
exports.default = authenticationController;
