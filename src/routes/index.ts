import { Router, Request, Response } from 'express';
import multer from 'multer';
const router = Router();

import * as UserController from '../controllers/userController';

const upload = multer({
    dest: './temp'
});

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

router.get('/users', UserController.allUsers)

export default router;