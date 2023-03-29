import {Entity , Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm'
import { Employee } from '../company/employee.entities'
import { checkProduct } from '../product/checkProduct'

@Entity()
export class User{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({unique: true})
    username:string

    @Column()
    password:string

    @Column({unique: true})
    email:string

    @OneToOne(() => Employee, (employee) => employee.user)
    employee: Employee

    @OneToMany(() => checkProduct, (checkProduct) => checkProduct.user)
    checkProduct: checkProduct

}