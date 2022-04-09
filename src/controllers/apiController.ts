import { Request, Response } from 'express';

export const uploadFile = async (req: Request, res: Response) => {
    type UploadTypes = {
        avatar: Express.Multer.File[],
        gallery: Express.Multer.File[]
    }

    const files = req.files as UploadTypes;
    
    console.log("Avatar", files.avatar );
    console.log("Gallery", files.gallery );
    
    res.json({});
}