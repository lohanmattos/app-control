import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";


const statusRoute = Router();

statusRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).json({
        statusRoute: "Aplicação OK."
    });
})

export default statusRoute;