import express from "express";
import {LogService} from "../services/log.service.js";
import {getWeatherByCity} from "../services/weather-api.service.js";

export const weatherRouter = express.Router()

weatherRouter.get('', async (req, res) => {
    const {city, token, language} = req.query
    if(!city || !token) {
        const errMsg = 'No city or token provided'
        LogService.error(errMsg, 'WEATHER_ROUTER')
        res.status(400).send(errMsg);
        return;
    }

    try {
        const weatherData = await getWeatherByCity(city, token, language || 'ru');
        res.send(weatherData);
    } catch (err) {
        res.status(500).send(err?.response?.data || err.message)
    }
})