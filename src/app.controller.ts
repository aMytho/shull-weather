import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { WeatherService } from './weather/weather.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly weatherService: WeatherService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("render")
    @Render("index")
    getRender() {
        return { message: this.weatherService.weather }
    }
}
