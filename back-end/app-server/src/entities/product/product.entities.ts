import {Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from 'typeorm'
import { Category } from '../product/category.entites'

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

    @ManyToOne(() => Category, (category) => category.product )
    product_category: Category

    @CreateDateColumn({ type: 'timestamp'})
    product_createdAt: Date
    
}