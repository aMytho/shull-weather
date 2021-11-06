import { Injectable } from '@nestjs/common';
import {readdir} from "fs/promises"

@Injectable()
export class MediaService {
    async getAllImages() {
        let files = [];
        let media = await readdir("");
        media.forEach(file => files.push(file));
        console.log(files);
        return files;
    }
}
