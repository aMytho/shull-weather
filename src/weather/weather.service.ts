import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
    public readonly weather: any = "R A I N "

    getWeather() {
        return this.weather;
    }

    getMockWeather() {
        return "WEATHER"
    }
}
