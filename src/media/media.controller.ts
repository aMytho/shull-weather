import { Controller, Post, Body, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MediaService } from './media.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('media')
export class MediaController {
    constructor(private mediaService: MediaService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(
        @UploadedFile() file: Express.Multer.File
    ) {
        console.log("request")
        console.log(file);
        return 1
    }

    @Get()
    getImage() {
        return this.mediaService.getImage("");
    }

    @Get("all")
    getAllImages() {
        return this.mediaService.getAllImages();
    }
}
