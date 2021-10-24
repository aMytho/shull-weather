import { Injectable } from '@nestjs/common';
import { MediaStorage } from './entity/media.entity';

@Injectable()
export class MediaService {
    images: MediaStorage
    addImage() {
        
    }

    getImage(image:string) {
        return this.images[image];
    }

    getAllImages() {
        return this.images
    }
}
