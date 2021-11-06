import { Controller, Get, Render } from '@nestjs/common';
import { OpenWeatherService } from 'src/open-weather/open-weather.service';
import { WeatherService } from './weather.service';

@Controller("weather")
export class WeatherController {
    constructor(
        private readonly weatherService: WeatherService,
        private weatherApi: OpenWeatherService
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

    @Get("all")
    async getAll() {
        let data = await this.weatherService.findAll();
        return data
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
