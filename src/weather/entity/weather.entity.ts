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

    /**
     * Wing angle (0-360)
     */
    @Column()
    currentWindDirection: number;

    @Column()
    currentWindDirectionVoltage: number;

    /**
     * Total rain in inches
     */
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

    /**
     * Outside Humidity
     */
    @Column()
    outsideHumidity: number;

    /**
     * Temp inside the weather unit (ignore)
     */
    @Column()
    insideTemperature: number;

    /**
     * Humidity inside the weather unit (ignore)
     */
    @Column()
    insideHumidity: number;

    /**
     * Air Quality Index
     */
    @Column()
    AQI: number;
}