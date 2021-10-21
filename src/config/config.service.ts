import { Injectable } from '@nestjs/common';
import {readFile} from "fs/promises"

@Injectable()
export class ConfigService {
    config: {}
    constructor() {
        this.loadConfigFile();
    }

    async loadConfigFile() {
        let fileData = await readFile("../../config/config.json");
        let parsedData = JSON.parse(fileData.toString());
        this.config = parsedData;
    }
}
