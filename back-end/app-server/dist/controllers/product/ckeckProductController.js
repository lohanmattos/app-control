"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkProductController = void 0;
const checkProduct_service_1 = require("../../services/checkProduct.service");
const product_service_1 = require("../../services/product.service");
const section_service_1 = require("../../services/section.service");
const user_service_1 = require("../../services/user.service");
const http_status_codes_1 = require("http-status-codes");
class checkProductController {
    async findAllCheckedProduct(req, res) {
        const result = await checkProduct_service_1.checkProductService.find({
            relations: {
                productCode: true,
                section: {
                    department: true,
                },
                user: {
                    employee: true
                }
            }
        });
        return res.status(200).json(result);
    }
    async createCheckProduct(req, res) {
        try {
            const { productCode, section, user } = req.body;
            const findProductId = await product_service_1.productService.findBy({ code: String(productCode) });
            const isSectionExist = await section_service_1.sectionService.findBy({ id: Number(section) });
            const isUserExist = await user_service_1.userService.findBy({ id: Number(user) });
            if (isSectionExist.length == 0) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ erro: "Seção não existe" });
            }
            if (isUserExist.length == 0) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ erro: "Usuario inválido não existe" });
            }
            if (findProductId.length > 0) {
                const newCheckProduct = {
                    productCode: findProductId[0],
                    section: section,
                    user: user,
                    checkProduct_createdAt: new Date()
                };
                const createCheckProduct = await checkProduct_service_1.checkProductService.create(newCheckProduct);
                await checkProduct_service_1.checkProductService.save(newCheckProduct);
                return res.status(http_status_codes_1.StatusCodes.CREATED).json(createCheckProduct);
            }
            else {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ erro: "Produto não existe" });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.checkProductController = checkProductController;
