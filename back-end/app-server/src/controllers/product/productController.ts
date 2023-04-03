import { Request, Response } from "express";
import { productService } from "../../services/product.service";

export class productController {

    async findAllProduct(req: Request, res: Response){
        const result = await productService.find({
            relations:{
                section:true
            }
        })

        return res.status(200).json(result)
    }

    async findProduct(req: Request, res: Response){
        
        const id = req.params.id

        const result = await productService.find({where: {id: Number(id)}, relations:
    {
        section: true,
        product_category: true,
        checkProduct: true,
    }})

        return res.status(200).json(result)
    }
}