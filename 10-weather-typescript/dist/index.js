var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as process from "process";
import { getArguments } from "./helpers/get-args.js";
import { addCity, deleteCities, getKeyValue, getWeatherByCity, LogService, saveCity, saveLanguage, saveToken } from "./services/index.js";
import { LANGUAGE, STORAGE_KEYS } from "./global/enum.js";
import axios from "axios";
function getWeatherInfo() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const city = yield getKeyValue(STORAGE_KEYS.CITY);
            const token = yield getKeyValue(STORAGE_KEYS.TOKEN);
            const language = (yield getKeyValue(STORAGE_KEYS.LANGUAGE)) || LANGUAGE.RUSSIAN;
            if (!city || !token || !language) {
                LogService.error(`Не указан токен, город или язык`);
                return;
            }
            const cities = city.split(', ');
            for (const cityEl of cities) {
                const weather = yield getWeatherByCity(cityEl, token, language);
                LogService.showWeatherData(weather, language);
            }
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                    LogService.error(`Неверно указан город`);
                    return;
                }
                if (((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status) === 401) {
                    LogService.error('Неверно указан токен');
                    return;
                }
            }
            LogService.error(error.message);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const args = getArguments(process.argv);
        if (args.h) {
            return LogService.showHelp();
        }
        if (args.c && typeof args.c === 'string') {
            return yield saveCity(args.c);
        }
        if (args.add && typeof args.add === 'string') {
            return addCity(args.add);
        }
        if (args.del) {
            return deleteCities();
        }
        if (args.t && typeof args.t === 'string') {
            return saveToken(args.t);
        }
        if (args.l && typeof args.l === 'string') {
            return saveLanguage(args.l);
        }
        return getWeatherInfo();
    });
}
main();
