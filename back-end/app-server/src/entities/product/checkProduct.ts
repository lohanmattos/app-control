import {Entity , Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, UpdateDateColumn, ManyToMany, OneToMany, JoinColumn} from 'typeorm'
import { Section } from '../company/section.entities'
import { User } from '../user/user.entities'
import { Product } from './product.entities'

@Entity()
export class checkProduct{

    @PrimaryGeneratedColumn('increment')
    id: number

    //@OneToMany(() => Product, (product) => product.checkProduct )
    @ManyToOne(() => Product, (product) => product.checkProduct  )
    productCode: Product[]

    @ManyToOne(() => Section, (section) => section.checkProduct  )
    section: Section

    @ManyToOne(() => User, (user) => user.checkProduct  )
    user: User

    //@CreateDateColumn({ type: 'timestamp'})
    //checkProduct_createdAt: Date

    //@UpdateDateColumn({ type: 'timestamp'})
    //checkProduct_updatedAt: Date

}