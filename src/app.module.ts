import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherService } from './weather/weather.service';
import { ConfigService } from './config/config.service';
import { DbService } from './db/db.service';

@Module({
  controllers: [AppController],
  providers: [AppService, WeatherService, ConfigService, DbService],
})
export class AppModule {}
