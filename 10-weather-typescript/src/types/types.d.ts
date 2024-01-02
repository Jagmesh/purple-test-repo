interface IArgs {
    [key: string]: string | true;
}

interface IOpenWeatherMap_WeatherDto {
    coord: {
        lon: number;
        lat: number;
    },
    weather: IWeatherObject[],
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    },
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
        },
    clouds: { all: number; },
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    },
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface IWeatherObject {
    id: number;
    main: string;
    description: string;
    icon: string;
}