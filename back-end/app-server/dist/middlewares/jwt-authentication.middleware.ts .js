"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_codes_1 = require("http-status-codes");
async function jwtAuthenticationMiddleware(req, res, next) {
    try {
        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Credencias não informadas" });
        }
        const [authorizationType, token] = authorizationHeader.split(' ');
        if (authorizationType !== 'Bearer' || !token) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Tipo de autenticação invalida" });
        }
        try {
            const tokenPayload = jsonwebtoken_1.default.verify(token, "my_secret_key");
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: "Token Inválido" });
            }
            const user = {
                id: tokenPayload.sub,
                username: tokenPayload.username
            };
            req.user = user;
            next();
        }
        catch (error) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ Error: error });
        }
    }
    catch (error) {
        next(error);
    }
}
exports.default = jwtAuthenticationMiddleware;
