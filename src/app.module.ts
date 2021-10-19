import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherService } from './weather/weather.service';

@Module({
  controllers: [AppController],
  providers: [AppService, WeatherService],
})
export class AppModule {}
