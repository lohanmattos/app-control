import { checkProductService } from "../../services/checkProduct.service";
import { Request, Response } from "express";
import { Product } from "../../entities/product/product.entities";
import { Section } from "../../entities/company/section.entities";
import { User } from "../../entities/user/user.entities";
import { productService } from "../../services/product.service";
import { sectionService } from "../../services/section.service";
import { userService } from "../../services/user.service";
import { checkProduct } from "../../entities/product/checkProduct";
import { StatusCodes } from "http-status-codes";


interface ICheckProduct{
    productCode: Product,
    section: Section,
    user: User,
    checkProduct_createdAt: Date
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

            const findProductId = await productService.findBy({code: String(productCode)})
            const isSectionExist = await sectionService.findBy({id: Number(section)})
            const isUserExist = await userService.findBy({id: Number(user)})


            if(isSectionExist.length == 0){
                return res.status(StatusCodes.NOT_FOUND).json({erro:"Seção não existe"})
            }

            if(isUserExist.length == 0){
                return res.status(StatusCodes.NOT_FOUND).json({erro:"Usuario inválido não existe"})
            }
        
            if(findProductId.length > 0){

                const newCheckProduct ={
                    productCode: findProductId[0],
                    section: section,
                    user:user,
                    checkProduct_createdAt: new Date()
                }

                const createCheckProduct = await checkProductService.create(newCheckProduct)
                await checkProductService.save(newCheckProduct);

                return res.status(StatusCodes.CREATED).json(createCheckProduct);

            }else{
                return res.status(StatusCodes.NOT_FOUND).json({erro:"Produto não existe"})
            }
           
        } catch (error) {
            console.log(error)
        }
        
    }
}