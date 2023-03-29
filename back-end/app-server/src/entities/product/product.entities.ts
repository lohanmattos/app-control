import {Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, ManyToMany, OneToMany} from 'typeorm'
import { Section } from '../company/section.entities'
import { Category } from '../product/category.entites'
import { checkProduct } from './checkProduct'

@Entity()
export class Product{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({unique: true})
    code:string

    @Column()
    name:string
    
    @Column()
    description: string

    @Column()
    price: number

    @ManyToOne(() => Section, (section) => section.product)
    section: Section

    @ManyToOne(() => Category, (category) => category.product )
    product_category: Category

    @CreateDateColumn({ type: 'timestamp'})
    product_createdAt: Date

    @OneToMany(() => checkProduct, (checkProduct) => checkProduct.productCode)
    checkProduct: checkProduct
    
}