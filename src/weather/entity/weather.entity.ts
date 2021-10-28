import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "WeatherData"})
export class Weather {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    TimeStamp: string;

    @Column()
    as3935LightningCount: number;

    @Column()
    as3935LastInterrupt: number;

    @Column()
    as3935LastDistance: string;

    @Column()
    as3935LastStatus: number;

    @Column()
    currentWindSpeed: number;

    @Column()
    currentWindGust: number;

    @Column()
    currentWindDirection: number;

    @Column()
    currentWindDirectionVoltage: number;

    @Column()
    totalRain: number;

    @Column()
    bmp180Temperature: number;

    @Column()
    bmp180Pressure: number;

    @Column()
    bmp180Altitude: number;

    @Column()
    bmp180SeaLevel: number;

    @Column()
    outsideTemperature: number;

    @Column()
    outsideHumidity: number;

    @Column()
    insideTemperature: number;

    @Column()
    insideHumidity: number;

    @Column()
    AQI: number;
}