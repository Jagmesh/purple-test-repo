import {LogService} from "./log.service.js";
import {deleteKey, getKeyValue, saveKeyValue} from "./storage.service.js";
import {STORAGE_KEYS} from "../global/enum.js";

export async function saveCity(city: string) {
    if (!city.length) {
        LogService.error('Не передан city (-с)');
        return;
    }
    try {
        await saveKeyValue(STORAGE_KEYS.CITY, city);
        LogService.success('Город сохранён');
    } catch (e) {
        LogService.error(`${e}`);
    }
}

export async function addCity(city: string) {
    if (!city.length) {
        LogService.error('Не передан city (-add)');
        return;
    }
    try {
        const cities = await getKeyValue(STORAGE_KEYS.CITY)
        if(!cities) {
            LogService.error('Не задан город по умолчанию. Задайте его через -c [CITY]');
            return;
        }
        await saveKeyValue(STORAGE_KEYS.CITY, `${cities}, ${city}`);
        LogService.success(`Город ${city} добавлен в список`);
    } catch (e) {
        LogService.error(`${e}`);
    }
}
export async function saveToken(token: string) {
    if (!token.length) {
        LogService.error('Не передан token (-t)');
        return;
    }
    try {
        await saveKeyValue(STORAGE_KEYS.TOKEN, token);
        LogService.success('Токен сохранён');
    } catch (e) {
        LogService.error(`${e}`);
    }
}

export async function saveLanguage(language: string) {
    if (!language.length) {
        LogService.error('Не передан language (-l)');
        return;
    }
    try {
        await saveKeyValue(STORAGE_KEYS.LANGUAGE, language);
        LogService.success('Язык сохранён');
    } catch (e) {
        LogService.error(`${e}`);
    }
}

export async function deleteCities() {
    try {
        await deleteKey(STORAGE_KEYS.CITY);
        LogService.success('Города удалены');
    } catch (e) {
        LogService.error(`${e}`);
    }
}