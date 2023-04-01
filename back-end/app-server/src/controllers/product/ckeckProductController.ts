import { checkProductService } from "../../services/checkProduct.service";
import { Request, Response } from "express";
import { Product } from "../../entities/product/product.entities";
import { Section } from "../../entities/company/section.entities";
import { User } from "../../entities/user/user.entities";
import { productService } from "../../services/product.service";
import { sectionService } from "../../services/section.service";
import { userService } from "../../services/user.service";


interface ICheckProduct{
    productCode: string,
    section: number,
    user: number
}

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

    async createCheckProduct(req: Request, res: Response){

        try {
            const {productCode, section, user }:ICheckProduct = req.body

            const isProductExist = await productService.findBy({code: productCode})
            const isSectionExist = await sectionService.findBy({id: section})
            const isUserExist = await userService.findBy({id: user})


            if(isProductExist.length > 0){

                const newCheckProduct:ICheckProduct ={
                    productCode: productCode,
                    section: section,
                    user:user
                }

                const createCheckProduct = await checkProductService.create(newCheckProduct)
                await checkProductService.save(newCheckProduct);

                return res.status(200).json(newCheckProduct)
            }else{
                return res.status(200).json({erro:"Produto não existe"})
            }
           
        } catch (error) {
            console.log(error)
        }
        
    }
}