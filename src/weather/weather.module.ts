import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenWeatherModule } from 'src/open-weather/open-weather.module';
import { Weather } from './entity/weather.entity';
import {WeatherController} from "./weather.controller"
import { WeatherService } from './weather.service';
import { ApiController } from './api/api.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Weather]), OpenWeatherModule],
    controllers: [WeatherController, ApiController],
    providers: [WeatherService],
    exports: [TypeOrmModule]
})
export class WeatherModule {}
