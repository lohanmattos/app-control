import { AppDataSource } from "../data-source";
import { checkProduct } from "../entities/product/checkProduct";


export const checkProductService = AppDataSource.getRepository(checkProduct);