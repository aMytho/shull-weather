import { Controller, Get } from '@nestjs/common';
import { OpenWeatherService } from 'src/open-weather/open-weather.service';
import { WeatherService } from '../weather.service';

@Controller('weather/api')
export class ApiController {
    constructor(
        private readonly weatherService: WeatherService,
        private readonly weatherApi: OpenWeatherService
    ) { }

    @Get("current")
    async getCurrentWeather() {
        let data = await this.weatherService.findRecent();
        return data;
    }

    @Get("history")
    async getHistoricalWeather() {
        let data = await this.weatherService.findAll();
        return data;
    }

    @Get("mock")
    create() {
        this.weatherService.generateMockWeather();
        return "Data generated, head to /weather/table to view the updated set"
    }

    @Get("global")
    async getAPI() {
        let data = await this.weatherApi.getCurrentWeather();
        return data
    }

    @Get("global/aqi")
    async getAQL() {
        let data = await this.weatherApi.getAQI();
        return data
    }
}
