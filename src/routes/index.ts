import { Router, Request, Response } from 'express';
const router = Router();

import * as UserController from '../controllers/userController';

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

router.get('/users', UserController.allUsers)

export default router;