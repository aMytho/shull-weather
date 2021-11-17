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

    /**
     * Returns the last 12 entries (1 hour of weather data)
     * @returns 
     */
    findRecent(): Promise<Weather[]> {
        return this.weatherRepository.query(`SELECT * FROM WeatherData ORDER BY id DESC LIMIT 12`)
    }

    /**
     * Returns the most recent weather data. (5 min)
     * @returns 
     */
    async getCurrent(): Promise<Weather> {
        let data = await this.weatherRepository.query(`SELECT * FROM WeatherData ORDER BY id DESC LIMIT 1`);
        return data[0];
    }

    async remove(id: string): Promise<void> {
        //await this.weatherRepository.delete(id);
        console.log("Attempted to delete a row, but you commented out the line to do so.");
    }

    getMockWeather() {
        return "WEATHER"
    }

    generateMockWeather() {
        console.log("Generating fake weather data")
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
