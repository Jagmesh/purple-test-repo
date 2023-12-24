import chalk from "chalk";

export class LogService {
    static write(message, scope) {
        console.log(`[${this.getLocalDate()}]: ${chalk.green('[LOG]')}[${chalk.magenta(scope ? scope : '')}] ${message}`);
    }

    static success(message, scope) {
        console.log(`[${this.getLocalDate()}]: ${chalk.bgGreenBright('[SUCCESS]')}[${chalk.magenta(scope ? scope : '')}] ${message}`);
    }

    static error(message, scope) {
        console.log(`[${this.getLocalDate()}]: ${chalk.bgRed('[ERROR]')}[${chalk.magenta(scope ? scope : '')}] ${message}`);
    }

    static getLocalDate() {
        const date = new Date();
        date.setHours(date.getHours() + 3);
        return date.toJSON().slice(0, -5).replace(/T/, ' ');

    }
}