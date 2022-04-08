import { Router, Request, Response } from 'express';
import multer from 'multer';
const router = Router();

import * as UserController from '../controllers/userController';
import * as ApiController from '../controllers/apiController';

const upload = multer({
    dest: './temp'
});

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

router.get('/users', UserController.allUsers)
router.post('/upload', upload.single('image'), ApiController.uploadFile)

export default router;