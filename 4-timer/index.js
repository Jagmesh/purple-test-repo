import { validateAndParseData } from "./helpers/validate-data.js"

function setTimer(hours, minutes, seconds) {
    const validatedTimerData = validateAndParseData(hours, minutes, seconds)

    const timerInMS = (
        validatedTimerData[0]* 60 * 60
         + validatedTimerData[1] * 60 
         + validatedTimerData[2]) 
         * 1000
    console.log(`Resulting timer in ms: ${timerInMS}`)
    setTimeout(() => {
        console.log('Timer ended!')
    }, timerInMS)
}

const [,, hours, minutes, seconds] = process.argv
setTimer(hours, minutes, seconds)