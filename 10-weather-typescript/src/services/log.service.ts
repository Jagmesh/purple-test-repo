import chalk from "chalk";
import dedent from 'dedent-js';
import {LANGUAGE} from "../global/enum.js";

export class LogService {
    static write(message: string, scope?: string) {
        console.log(`[${this.getLocalDate()}]: ${chalk.green('[LOG]')}${chalk.bgMagenta(scope ? scope : '')} ${message}`);
    }

    static success(message: string, scope?: string) {
        console.log(`[${this.getLocalDate()}]: ${chalk.bgGreenBright('[SUCCESS]')}${chalk.bgMagenta(scope ? scope : '')} ${message}`);
    }

    static error(message: string, scope?: string) {
        console.log(`[${this.getLocalDate()}]: ${chalk.bgRed('[ERROR]')}${chalk.bgMagenta(scope ? scope : '')} ${message}`);
    }

    static showHelp() {
        console.log(
            dedent`${chalk.bgCyan(' HELP ')}
            Без параметров — вывод погоды
            -c [CITY] для установки города
            -add [CITY] для добавления дополнительного города в список активных городов. Можно добавлять несколько дополнительных городов
            -del удаляет сохраненные города
            -h для вывода помощи
            -t [API_KEY] для сохранения токена
            -l [LANGUAGE] для выбора языка вывода. Доступны: ru, eng
            `
        );
    }

    static showWeatherData(data: IOpenWeatherMap_WeatherDto, language: string) {
        switch (language) {
            case LANGUAGE.RUSSIAN:
                console.log(
                    dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${data.name}
                    ${data.weather[0].description}
                    Температура: ${data.main.temp} (ощущается как ${data.main.feels_like})
                    Влажность: ${data.main.humidity}%
                    Скорость ветра: ${data.wind.speed}
                    `)
                return;
            case LANGUAGE.ENGLISH:
                console.log(
                    dedent`${chalk.bgYellow(' WEATHER ')} Weather in ${data.name}
                    ${data.weather[0].description}
                    Temperature: ${data.main.temp} (feels like ${data.main.feels_like})
                    Humidity: ${data.main.humidity}%
                    Wind speed: ${data.wind.speed}
                    `)
                return;
            default:
                this.error('Указан невалидный язык! Список языков: ru, eng')
        }
    }

    static getLocalDate() {
        const date = new Date();
        date.setHours(date.getHours() + 3);
        return date.toJSON().slice(0, -5).replace(/T/, ' ');

    }
}