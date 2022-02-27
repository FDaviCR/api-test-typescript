import { Request, Response } from 'express';

import { User } from '../models/User';

export const allUsers = async (req: Request, res: Response) => {
    let users = await User.findAll();

    res.send(users);
}