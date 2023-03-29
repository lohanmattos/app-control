import { Request, Response } from "express";
import { productService } from "../../services/product.service";

export class productController {

    async findAllProduct(req: Request, res: Response){
        const result = await productService.find({
            relations: {
                section: true,
                product_category: true,
                checkProduct: true,
            }
        })

        return res.status(200).json(result)
    }
}