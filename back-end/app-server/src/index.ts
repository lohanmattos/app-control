import express from "express";
import 'reflect-metadata';
import { AppDataSource } from "./data-source";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware.ts ";
import authorizationRoute from "./routes/authorization.route";
//import basicAuthenticationMiddleware from "./middlewares/basic-authentication.middleware";
//import authorizationRoute from "./routes/authorization.route";
//import departamentoRoute from "./routes/departamento.route";
//import empresaRoute from "./routes/empresa.route";
import statusRoute from "./routes/status.route";
import userRoute from "./routes/user.route";
var cors = require('cors');

//Configuração padrao
const app = express();
const host = 'http://localhost';
const port = 3000;

//inicializar o dataSource

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")

        //Configurações da Aplicação
        app.use(cors())
        app.use(express.json());


        //Configuração das rotas
        app.use(authorizationRoute);
        app.use(statusRoute);
        app.use(jwtAuthenticationMiddleware, userRoute);

        //app.use(basicAuthenticationMiddleware, empresaRoute);
        //app.use(departamentoRoute)




        //Iniciar o servidor 
        app.listen(port, () => {
            console.log(`Servidor online: ${host}:${port}`)
        })

    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


