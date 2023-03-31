import { checkProductService } from "../../services/checkProduct.service";
import { Request, Response } from "express";

export class checkProductController {

    async findAllCheckedProduct(req: Request, res: Response){
        const result = await checkProductService.find({
            relations:{
                productCode:true,
                section: {
                    department: true,
                },
                user: {
                    employee: true
                }
            
            }
        })

        return res.status(200).json(result)
    }
}