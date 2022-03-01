import { Request, Response } from 'express';

import { User } from '../models/User';
import Users from '../models/Users';

export const allUsers = async (req: Request, res: Response) => {
    let users = await User.findAll();
    let usuarios = await Users.find({});

    console.log("Users: ", usuarios);

    res.send(users);
}