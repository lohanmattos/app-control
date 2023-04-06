"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const bcrypt_1 = __importDefault(require("bcrypt"));
const data_source_1 = require("./data-source");
const jwt_authentication_middleware_ts_1 = __importDefault(require("./middlewares/jwt-authentication.middleware.ts "));
const authorization_route_1 = __importDefault(require("./routes/authorization.route"));
const status_route_1 = __importDefault(require("./routes/status.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const user_service_1 = require("./services/user.service");
const employee_route_1 = __importDefault(require("./routes/employee.route"));
const company_route_1 = __importDefault(require("./routes/company.route"));
const department_route_1 = __importDefault(require("./routes/department.route"));
const section_route_1 = __importDefault(require("./routes/section.route"));
const checkProduct_route_1 = __importDefault(require("./routes/checkProduct.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
var cors = require('cors');
const app = (0, express_1.default)();
const host = 'http://localhost';
const port = 3000;
data_source_1.AppDataSource.initialize()
    .then(async () => {
    console.log("Data Source has been initialized!");
    app.use(cors());
    app.use(express_1.default.json());
    app.use(authorization_route_1.default);
    app.use(status_route_1.default);
    app.use(jwt_authentication_middleware_ts_1.default, user_route_1.default);
    app.use(jwt_authentication_middleware_ts_1.default, employee_route_1.default);
    app.use(jwt_authentication_middleware_ts_1.default, company_route_1.default);
    app.use(jwt_authentication_middleware_ts_1.default, department_route_1.default);
    app.use(jwt_authentication_middleware_ts_1.default, section_route_1.default);
    app.use(jwt_authentication_middleware_ts_1.default, checkProduct_route_1.default);
    app.use(jwt_authentication_middleware_ts_1.default, product_route_1.default);
    app.listen(port, () => {
        console.log(`Servidor online: ${host}:${port}`);
    });
    const password = "Root@2021";
    const passwordEnclipt = await bcrypt_1.default.hash(password, Number(process.env.KEY));
    const userAdmin = {
        username: 'admin',
        password: passwordEnclipt,
        email: 'lohanamendola18@gmail.com',
    };
    const isUserExist = await user_service_1.userService.findOneBy({
        username: userAdmin.username
    });
    if (!isUserExist) {
        const newUserAdmin = await user_service_1.userService.create(userAdmin);
        await user_service_1.userService.save(newUserAdmin);
    }
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
