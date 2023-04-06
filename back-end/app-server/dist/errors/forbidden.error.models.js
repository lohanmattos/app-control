"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForbiddenError extends Error {
    constructor(message, erro) {
        super(message);
        this.message = message;
        this.erro = erro;
    }
}
exports.default = ForbiddenError;
