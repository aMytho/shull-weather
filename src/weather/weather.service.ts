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
        await this.weatherRepository.delete(id);
    }

    getMockWeather() {
        return "WEATHER"
    }
}
