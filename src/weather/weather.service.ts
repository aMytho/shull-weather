import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class WeatherService {
    public readonly weather: any = "R A I N "
    constructor(readonly DbService: DbService) {

    }

    getWeather() {
        return this.weather;
    }

    getMockWeather() {
        return "WEATHER"
    }
}
