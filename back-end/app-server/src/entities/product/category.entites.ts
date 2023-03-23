import {Entity , Column, OneToMany, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { Product } from './product.entities'

@Entity()
export class Category{
    
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column({unique: true})
    name:string

    @OneToMany(() => Product, (product) => product.product_category)
    product: Product[]

}