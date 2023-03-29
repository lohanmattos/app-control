import { AppDataSource } from "../data-source";
import { Product } from "../entities/product/product.entities";


export const productService = AppDataSource.getRepository(Product);