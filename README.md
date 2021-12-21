<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

A webserver for managing weather data. Provides and API and a few basic pages. Built with NestJS.

## Installation

```bash
$ npm install
```

## Database Connection

Create `ormconfig.json` in the root directory. Enter the below data to connect to the server. Make sure to replace your credentials with the ones shown.

```json
{
    "type": "mysql",
    "host": "IP Address",
    "port": 3306,
    "username": "username",
    "password": "password",
    "database": "SkyWeather",
    "entities": ["dist/weather/entity/weather.entity.js"],
    "synchronize": false
}
```

If you are using docker the default username and password are both root. Copy all other fields from the example ormconfig file.

## Config Options

Create `.env` in the root directory. Enter the below data replacing the values with your own key and zip code.

```env
openWeatherKey = OPEN_WEATHER_KEY_HERE
zipCode = 00601
```

## Database Setup

Move into the docker container. 

Example: `docker exec -it  shull-weather_db_1 bash`

Connect to the databse.

Example: `mysql -u root -h localhost -p SkyWeather` 
Enter the password when prompted.

Copy and paste all of the data in `SkyWeather.sql` into the sql prompt.

Exit the sql prompt.

Example: `exit`

Exit the docker container

Example: `exit`

## Running the app

```bash
# normal start
$ npm run start

# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Generate Fake Data

While the server is running head to /weather/api/mock. This will generate one entry for each request.