import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './entity/weather.entity';

@Injectable()
export class WeatherService {
    constructor(
        @InjectRepository(Weather)
        private weatherRepository: Repository<Weather>,
    ) { }

    findAll(): Promise<Weather[]> {
        return this.weatherRepository.find();
    }

    findOne(id: string): Promise<Weather> {
        return this.weatherRepository.findOne(id);
    }

    findRecent() {
        return this.weatherRepository.query(`SELECT * FROM WeatherData ORDER BY id DESC LIMIT 10`)
    }

    async remove(id: string): Promise<void> {
        //await this.weatherRepository.delete(id);
        console.log("Attempted to delete a row, but you commented out the line to do so.");
    }

    getMockWeather() {
        return "WEATHER"
    }

    generateMockWeather() {
        this.weatherRepository.insert({
            AQI: 100,
            //TimeStamp: "2021-12",
            as3935LastDistance: "1",
            as3935LastInterrupt: 1,
            as3935LastStatus: 2,
            as3935LightningCount: 3,
            bmp180Altitude: 4,
            bmp180Temperature: 5,
            bmp180Pressure: 6,
            bmp180SeaLevel: 0,
            currentWindDirection: 7,
            currentWindGust: 8,
            currentWindSpeed: 9,
            currentWindDirectionVoltage: 20,
            insideHumidity: 11,
            insideTemperature: 12,
            outsideHumidity: 13,
            outsideTemperature: 14,
            totalRain: 15,
        })
    }
}
