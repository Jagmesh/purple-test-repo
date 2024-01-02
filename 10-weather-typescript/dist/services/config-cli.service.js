var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LogService } from "./log.service.js";
import { deleteKey, getKeyValue, saveKeyValue } from "./storage.service.js";
import { STORAGE_KEYS } from "../global/enum.js";
export function saveCity(city) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!city.length) {
            LogService.error('Не передан city (-с)');
            return;
        }
        try {
            yield saveKeyValue(STORAGE_KEYS.CITY, city);
            LogService.success('Город сохранён');
        }
        catch (e) {
            LogService.error(`${e}`);
        }
    });
}
export function addCity(city) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!city.length) {
            LogService.error('Не передан city (-add)');
            return;
        }
        try {
            const cities = yield getKeyValue(STORAGE_KEYS.CITY);
            if (!cities) {
                LogService.error('Не задан город по умолчанию. Задайте его через -c [CITY]');
                return;
            }
            yield saveKeyValue(STORAGE_KEYS.CITY, `${cities}, ${city}`);
            LogService.success(`Город ${city} добавлен в список`);
        }
        catch (e) {
            LogService.error(`${e}`);
        }
    });
}
export function saveToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!token.length) {
            LogService.error('Не передан token (-t)');
            return;
        }
        try {
            yield saveKeyValue(STORAGE_KEYS.TOKEN, token);
            LogService.success('Токен сохранён');
        }
        catch (e) {
            LogService.error(`${e}`);
        }
    });
}
export function saveLanguage(language) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!language.length) {
            LogService.error('Не передан language (-l)');
            return;
        }
        try {
            yield saveKeyValue(STORAGE_KEYS.LANGUAGE, language);
            LogService.success('Язык сохранён');
        }
        catch (e) {
            LogService.error(`${e}`);
        }
    });
}
export function deleteCities() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield deleteKey(STORAGE_KEYS.CITY);
            LogService.success('Города удалены');
        }
        catch (e) {
            LogService.error(`${e}`);
        }
    });
}
