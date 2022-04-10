import { Router, Request, Response } from 'express';
import multer from 'multer';
const router = Router();

import * as UserController from '../controllers/userController';
import * as ApiController from '../controllers/apiController';

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './temp');
    },
    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random() * 99999);
        cb(null, `${randomName+Date.now()}+.jpg`);
    }
});

const upload = multer({
    storage: storageConfig,
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];

        if(allowed.includes(file.mimetype)){
            cb(null, true);
        }else{
            cb(null, false);
        }
    },
    limits: { fieldSize: 2000000 }
});

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

router.get('/users', UserController.allUsers)

router.post('/upload', upload.fields([
    { name: 'avatar', maxCount: 1},
    { name: 'gallery', maxCount: 3}
]), ApiController.uploadFile)

export default router;