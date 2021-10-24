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

    @Get("api/recent")
    async getRecent() {
        return await this.weatherService.findRecent();
    }

    @Get("table")
    @Render("table")
    async renderTable() {
        return {weather: await this.weatherService.findRecent()};
    }

    @Get("home")
    @Render("index")
    async loadHomePage() {
        return {weather: await this.weatherService.findRecent()};
    }
}
