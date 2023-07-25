import path from "path";
import fs from 'fs';
import { UploadedFile } from "express-fileupload";

import { v2 as cloudinary } from 'cloudinary';
import config from '../../../config';
import { Users } from "../auth/entities";
import { StatusCodes } from "http-status-codes";

cloudinary.config(config.CLOUDINARY_URL);
export class UploadService {

    async uploadPhoto(photo: UploadedFile, user: Users) {

        try {
            
            const { name } = photo;
    
            const [, extension] = name.split('.');
    
            const email = user.email;
            const [emailWithoutDot] = email.split('.');
            const newPhotoName = `${emailWithoutDot}.${extension}`;
    
            const uploadPath = path.join(__dirname, '../../../../src/common/uploads', 'profile-photos', newPhotoName);
    
            photo.mv(uploadPath, (err) => {
                if (err) {
                    console.log(err);
                }
            });
    
            if (user.photoUrl) {
                const nameArray = user.photoUrl.split('/');
                const name = nameArray[nameArray.length - 1];
                const [photoId] = name.split('.');
                await cloudinary.uploader.destroy(photoId);
            }
    
            const { secure_url} = await cloudinary.uploader.upload(uploadPath);
            user.photoUrl = secure_url;
            
            await user.save();
    
            return {
                data: user.photoUrl,
                message: 'Profile photo updated successfully!',
                code: StatusCodes.OK,
            }
        } catch (error) {
            return {
                data: null,
                message: 'An error has ocurre while uploading this photo',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

}