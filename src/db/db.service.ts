import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class DbService {
    constructor(private ConfigService: ConfigService) {
        
    }


    async connect() {
        
    }

    async getData() {
        return {
            condition: "sunny",
            other: "example"
        }
    }

    async clearOldData() {

    }
}
