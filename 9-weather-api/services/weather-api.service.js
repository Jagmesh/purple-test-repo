import axios from "axios";

export async function getWeatherByCity(city, token, language) {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: token,
                lang: language,
                units: 'metric'
            }
        });
        return data;
}