import * as process from "process";
import {getArguments} from "./helpers/get-args.js";
import {
    addCity, deleteCities,
    getKeyValue,
    getWeatherByCity,
    LogService,
    saveCity,
    saveLanguage,
    saveToken
} from "./services/index.js";
import {LANGUAGE, STORAGE_KEYS} from "./global/enum.js";
import axios, {AxiosError} from "axios";

async function getWeatherInfo(): Promise<void> {
    try {
        const city = await getKeyValue(STORAGE_KEYS.CITY);
        const token = await getKeyValue(STORAGE_KEYS.TOKEN)
        const language = await getKeyValue(STORAGE_KEYS.LANGUAGE) || LANGUAGE.RUSSIAN
        if (!city || !token || !language) {
            LogService.error(`Не указан токен, город или язык`);
            return;
        }

        const cities = city.split(', ')
        for (const cityEl of cities) {
            const weather = await getWeatherByCity(cityEl, token, language);
            LogService.showWeatherData(weather, language);
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            if (error?.response?.status === 404) {
                LogService.error(`Неверно указан город`);
                return;
            }
            if (error?.response?.status === 401) {
                LogService.error('Неверно указан токен');
                return;
            }
        }

        LogService.error(error.message);
    }
}

async function main() {
    const args = getArguments(process.argv)

    if(args.h) {
        return LogService.showHelp();
    }
    if(args.c && typeof args.c === 'string') {
        return await saveCity(args.c);
    }
    if(args.add && typeof args.add === 'string') {
        return addCity(args.add)
    }
    if(args.del) {
        return deleteCities()
    }
    if (args.t && typeof args.t === 'string') {
        return saveToken(args.t);
    }
    if (args.l && typeof args.l === 'string') {
        return saveLanguage(args.l);
    }

    return getWeatherInfo();
}

main();