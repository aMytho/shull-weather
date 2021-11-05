export interface weatherQuery {
    coord: { lon: 9.4251, lat: 47.3735 },
    weather: [
        {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n'
        }
    ],
    base: 'stations',
    main: {
        temp: 275.09,
        feels_like: 273.55,
        temp_min: 273.28,
        temp_max: 276.2,
        pressure: 1015,
        humidity: 91
    },
    visibility: 10000,
    wind: { speed: 1.54, deg: 80 },
    clouds: { all: 75 },
    dt: 1636056258,
    sys: {
        type: 1,
        id: 6944,
        country: 'CH',
        sunrise: 1636006218,
        sunset: 1636041683
    },
    timezone: 3600,
    id: 2661343,
    name: 'Bühler',
    cod: 200
}