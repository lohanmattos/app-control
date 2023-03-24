import express from "express";
import 'reflect-metadata';
import { AppDataSource } from "./data-source";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware.ts ";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import userRoute from "./routes/user.route";
import { userService } from "./services/user.service";
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

        //Iniciar o servidor 
        app.listen(port, () => {
            console.log(`Servidor online: ${host}:${port}`)
        })

        //Cria um User default do Sistema
        const userAdmin = {
            username: 'admin',
            password: 'Root@2021',
            email: 'lohanamendola18@gmail.com',
        }

        const isUserExist = await userService.findOneBy(userAdmin);

        if (!isUserExist) {
            const newUserAdmin = await userService.create(userAdmin);
            await userService.save(newUserAdmin);
        }

    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


