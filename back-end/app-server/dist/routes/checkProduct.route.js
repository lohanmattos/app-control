"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ckeckProductController_1 = require("../controllers/product/ckeckProductController");
const checkProductRoute = (0, express_1.Router)();
checkProductRoute.get('/check-product', new ckeckProductController_1.checkProductController().findAllCheckedProduct);
checkProductRoute.post('/check-product', new ckeckProductController_1.checkProductController().createCheckProduct);
exports.default = checkProductRoute;
