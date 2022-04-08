import { Request, Response } from 'express';

export const uploadFile = async (req: Request, res: Response) => {
    const files = req.files as {[fieldname: string]: Express.Multer.File[]};
    console.log("Avatar", files.avatar );
    console.log("Gallery", files.gallery );
    
    res.json({});
}