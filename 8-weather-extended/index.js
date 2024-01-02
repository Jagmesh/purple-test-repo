import {getArguments} from './helpers/get-args.js'
import {
    addCity,
    getKeyValue,
    getWeatherByCity,
    LogService,
    saveCity,
    saveLanguage,
    saveToken
} from "./services/index.js";
import {LANGUAGE, STORAGE_KEYS} from "./global/enum.js";
import {deleteCities} from "./services/config-cli.service.js";

async function getWeatherInfo() {
    try {
        const city = await getKeyValue(STORAGE_KEYS.CITY);
        const token = await getKeyValue(STORAGE_KEYS.TOKEN)
        const language = await getKeyValue(STORAGE_KEYS.LANGUAGE) || LANGUAGE.RUSSIAN
        if(!city || !token || !language) {
            LogService.error(`Не указан токен, город или язык`);
            return;
        }

        const cities = city.split(', ')
        for (const cityEl of cities) {
            const weather = await getWeatherByCity(cityEl, token, language);
            LogService.showWeatherData(weather, language);
        }
    } catch (error) {
        if (error?.response?.status === 404) {
            LogService.error(`Неверно указан город`);
        } else if (error?.response?.status === 401) {
            LogService.error('Неверно указан токен');
        } else {
            LogService.error(error.message);
        }
    }
}

function main () {
    const args = getArguments(process.argv);
    if (args.h) {
        return LogService.showHelp();
    }
    if (args.c) {
        return saveCity(args.c);
    }
    if(args.add) {
        return addCity(args.add)
    }
    if(args.del) {
        return deleteCities(STORAGE_KEYS.CITY)
    }
    if (args.t) {
        return saveToken(args.t);
    }
    if (args.l) {
        return saveLanguage(args.l);
    }
    return getWeatherInfo();
};

main();