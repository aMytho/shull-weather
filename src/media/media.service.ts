import { Injectable } from '@nestjs/common';
import { MediaStorage } from './entity/media.entity';
import {readdir} from "fs/promises"

@Injectable()
export class MediaService {
    images: MediaStorage
    addImage() {
        
    }

    getImage(image:string) {
        return this.images[image];
    }

    async getAllImages() {
        let files = [];
        let media = await readdir("");
        media.forEach(file => files.push(file));
        console.log(files);
        return files;
    }
}
