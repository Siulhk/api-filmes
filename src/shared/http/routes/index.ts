import { Router } from 'express';
import filmesRouter from '@modules/Filme/routes/filmes.routes';

const routes = Router();

routes.use('/filmes', filmesRouter);

export default routes;