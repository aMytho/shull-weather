import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Aqi } from './entity/aqi.entity';
import { WeatherQuery } from './entity/current-weather.entity';

@Injectable()
export class OpenWeatherService {
    key: String
    zipCode: Number;
    latitutde: Number;
    longitude: Number;

    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {
        this.key = this.configService.get("openWeatherKey", "NO KEY");
        this.zipCode = Number(this.configService.get("zipCode", "00601"));
        this.latitutde = Number(this.configService.get("latitude", "40.7128"));
        this.longitude = Number(this.configService.get("longitude", "-74.0060"));
    }

    async getAQI(): Promise<Aqi | null> {
        console.log("Querying AQI from OpenWeather");
        let Aqi: Aqi = await this.makeQuery(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${this.latitutde}&lon=${this.longitude}&appid=${this.key}`);
        if (Aqi && typeof Aqi === "object") {
            return Aqi;
        } else {
            return null;
        }
    }

    async getCurrentWeather(): Promise<WeatherQuery | null> {
        console.log("Querying open weather API");
        let currentWeather: WeatherQuery = await this.makeQuery(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zipCode}&appid=${this.key}&units=imperial`);
        if (currentWeather && typeof currentWeather === "object") {
            return currentWeather;
        } else {
            return null;
        }
    }

    private makeQuery(url: string): Promise<any> {
        console.log("Querying open weather API");
        return new Promise(resolve => {
            let request = this.httpService.get(url);
            let weatherData: WeatherQuery | Aqi;
            request.subscribe({
                next(x) {
                    console.log(x.data);
                    weatherData = x.data;
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                    resolve(weatherData);
                },
                complete() {
                    resolve(weatherData);
                    console.log("Request complete");
                }
            });
        })
    }
}