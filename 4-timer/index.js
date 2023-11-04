import { validateAndParseData } from "./helpers/validate-data.js"

function setTimer(timerData) {
    let validatedTimerData;
    try {
        validatedTimerData = validateAndParseData(timerData)
    } catch (error) {
        console.log(`Error: ${error.message}. Format: <number>h <number>m <number>s. For example: 1h 10m 0s or 0h 0m 30`)
        return;
    }
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

const [,, ...timerData] = process.argv
setTimer(timerData)