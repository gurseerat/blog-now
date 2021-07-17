import { Router } from 'express';
import BlogsRouter from './blogs.routes';

const routes = Router();

routes.use('/blogs', BlogsRouter);

export default routes;