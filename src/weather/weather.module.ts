import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from './entity/weather.entity';
import {WeatherController} from "./weather.controller"
import { WeatherService } from './weather.service';

@Module({
    imports: [TypeOrmModule.forFeature([Weather])],
    controllers: [WeatherController],
    providers: [WeatherService],
    exports: [TypeOrmModule]
})
export class WeatherModule {}