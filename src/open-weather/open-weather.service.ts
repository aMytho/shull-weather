import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenWeatherService {
    key: String
    zipCode: Number;
    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {
        this.key = this.configService.get("openWeatherKey", "NO KEY");
        this.zipCode = Number(this.configService.get("zipCode", "00601"));
    }

    async getCurrentData() {
        return 1;
    }

    async getHourlyData() {
        return 2;
    }

    async getWeeklyData() {
        return 3;
    }

    getCurrentWeather() {
        console.log("Querying open weather API");
        return new Promise(resolve => {
            let request = this.httpService.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zipCode}&appid=${this.key}&units=imperial`);
            let weatherData;
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
