import { Controller, Get, Render } from '@nestjs/common';
import { WeatherService } from './weather.service';
/**
 * Handles weather pages.
 */
@Controller("weather")
export class WeatherController {
    constructor(
        private readonly weatherService: WeatherService,
        ) { }

    @Get()
    @Render("index")
    async loadHomePage() {
        return {weather: await this.weatherService.findRecent()};
    }

    @Get("table")
    @Render("table")
    async renderTable() {
        return {weather: await this.weatherService.findRecent()};
    }

    @Get("test")
    @Render("test")
    async getTestPage() {
        return {weather: await this.weatherService.getCurrent()};
    }
}
