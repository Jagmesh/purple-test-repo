import express from 'express'
import {LogService} from "./services/log.service.js";
import {weatherRouter} from "./weather/weather.js";

const APP_PORT = 3000;

const app = express()

app.use('/weather', weatherRouter)

app.listen(APP_PORT, () => {
    LogService.write(`App launched on ${APP_PORT} port`, 'BOOTSTRAP')
})
