import { Controller, Get, Render } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller("weather")
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) { }

    @Get()
    async tryQuery() {
        const data = await this.weatherService.findAll();
        return data;
    }

    @Get("render")
    @Render("index")
    getRender() {
        return { message: "example" }
    }

    @Get("recent")
    async getRecent() {
        return await this.weatherService.findRecent();
    }
}
