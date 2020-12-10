import { Router } from 'express';
import yourRoutesRouter from '@modules/compareImages/infra/http/routes/yourRoutes.routes';

const routes = Router();

routes.use('/compare', yourRoutesRouter);


export default routes;
