import {LogService} from "./log.service.js";
import {deleteKey, getKeyValue, saveKeyValue} from "./storage.service.js";
import {getWeatherByCity} from "./weather.service.js";
import {addCity, saveCity, saveLanguage, saveToken} from "./config-cli.service.js";

export {LogService, saveKeyValue, getKeyValue, getWeatherByCity, saveCity, saveLanguage, saveToken, addCity, deleteKey}