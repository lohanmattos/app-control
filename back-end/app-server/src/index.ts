import express from "express";
import 'reflect-metadata';
import bcrypt from "bcrypt";
import { AppDataSource } from "./data-source";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware.ts ";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import userRoute from "./routes/user.route";
import { userService } from "./services/user.service";
import employeeRoute from "./routes/employee.route";
import companyRoute from "./routes/company.route";
import departamentRoute from "./routes/department.route";
import sectionRoute from "./routes/section.route";
import checkProductRoute from "./routes/checkProduct.route";
import productRoute from "./routes/product.route";
var cors = require('cors');

//Configuração padrao
const app = express();
const host = 'http://localhost';
const port = 3000;

//inicializar o dataSource

AppDataSource.initialize()
    .then( async () => {
        console.log("Data Source has been initialized!")

        //Configurações da Aplicação
        app.use(cors())
        app.use(express.json());


        //Configuração das rotas
        app.use(authorizationRoute);
        app.use(statusRoute);

        app.use(jwtAuthenticationMiddleware, userRoute);
        app.use(jwtAuthenticationMiddleware, employeeRoute);
        app.use(jwtAuthenticationMiddleware, companyRoute);
        app.use(jwtAuthenticationMiddleware, departamentRoute);
        app.use(jwtAuthenticationMiddleware, sectionRoute);
        app.use(jwtAuthenticationMiddleware,checkProductRoute);
        app.use(jwtAuthenticationMiddleware,productRoute);

        
        //Iniciar o servidor 
        app.listen(port, () => {
            console.log(`Servidor online: ${host}:${port}`)
        })

        const password = "Root@2021"
        const passwordEnclipt = await bcrypt.hash(password, Number(process.env.KEY));

        //Cria um User default do Sistema
        const userAdmin = {
            username: 'admin',
            password: passwordEnclipt,
            email: 'lohanamendola18@gmail.com',
        }

        const isUserExist = await userService.findOneBy({
            username: userAdmin.username
        });

        if (!isUserExist) {
            const newUserAdmin = await userService.create(userAdmin);
            await userService.save(newUserAdmin);
        }

    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


