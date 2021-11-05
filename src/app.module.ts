import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherService } from './weather/weather.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherModule } from './weather/weather.module';
import { Connection } from 'typeorm';
import { MediaModule } from './media/media.module';
import { OpenWeatherModule } from './open-weather/open-weather.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(), WeatherModule, MediaModule, OpenWeatherModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, WeatherService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
