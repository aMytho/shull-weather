import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenWeatherModule } from '../open-weather/open-weather.module';
import { Weather } from './entity/weather.entity';


describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Weather]), OpenWeatherModule],
      providers: [WeatherService],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("SHould return recent weather", async () => {
    expect(await service.findRecent()).toBe(await service.findRecent());
  })
});
