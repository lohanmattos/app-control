import { Router} from "express";
import sectionController from "../controllers/companyController/sectionControlle";


const sectionRoute = Router();

sectionRoute.post('/section', new sectionController().createSection);
sectionRoute.get('/sections', new sectionController().findAllSections)

export default sectionRoute;