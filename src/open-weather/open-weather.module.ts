import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenWeatherService } from './open-weather.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [OpenWeatherService],
  exports: [OpenWeatherService]
})
export class OpenWeatherModule {}
