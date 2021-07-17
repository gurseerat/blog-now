
import { Router } from 'express';
import { BlogsController } from '../controllers';

const BlogsRouter = Router();

BlogsRouter.get('/', (req, res) => {
    const blogs = new BlogsController({ req }, { res });
    return blogs.getAllBlogs();
});

export default BlogsRouter;