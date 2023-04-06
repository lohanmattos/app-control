"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("../../services/product.service");
class productController {
    async findAllProduct(req, res) {
        const result = await product_service_1.productService.find({
            relations: {
                section: true
            }
        });
        return res.status(200).json(result);
    }
    async findProduct(req, res) {
        const id = req.params.id;
        const result = await product_service_1.productService.find({ where: { id: Number(id) }, relations: {
                section: true,
                product_category: true,
                checkProduct: {
                    section: true,
                    user: {
                        employee: true
                    }
                },
            } });
        return res.status(200).json(result);
    }
}
exports.productController = productController;
