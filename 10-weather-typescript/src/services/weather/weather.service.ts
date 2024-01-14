import axios from "axios";
import {IOpenWeatherResponse} from "./weather.interface.js";

export async function getWeatherByCity(city: string, token: string, language: string): Promise<IOpenWeatherResponse> {
        const { data } = await axios.get(process.env.OPEN_WEATHER_MAP_API_URL, {
            params: {
                q: city,
                appid: token,
                lang: language,
                units: 'metric'
            }
        });
        return data;
}