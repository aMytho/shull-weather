import { Controller, Post, Get, UseInterceptors, Render, UploadedFiles, UploadedFile } from '@nestjs/common';
import { MediaService } from './media.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from "./file-upload.utils"
import { diskStorage } from 'multer';

@Controller('media')
export class MediaController {
    constructor(private mediaService: MediaService) { }

    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    async uploadedFile(@UploadedFile() file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }


    @Get()
    getImage() {
        return this.mediaService.getImage("");
    }

    @Get("all")
    getAllImages() {
        return this.mediaService.getAllImages();
    }

    @Get("upload")
    @Render("media")
    uploadImageWeb() {
        return { data: false }
    }
}
