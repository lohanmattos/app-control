"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const statusRoute = (0, express_1.Router)();
statusRoute.get('/', (req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        statusRoute: "Aplicação OK."
    });
});
exports.default = statusRoute;
