import {Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, ManyToMany, OneToMany, JoinColumn} from 'typeorm'
import { Section } from '../company/section.entities'
import { User } from '../user/user.entities'
import { Product } from './product.entities'

@Entity()
export class checkProduct{

    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => Product, (product) => product.checkProduct  )
    productCode: Product[]

    @ManyToOne(() => Section, (section) => section.checkProduct  )
    section: Section

    @ManyToOne(() => User, (user) => user.checkProduct  )
    user: User

    @CreateDateColumn({ type: 'timestamp'})
    checkProduct_createdAt: Date

}