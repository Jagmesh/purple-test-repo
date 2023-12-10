import { validateAndParseData } from "./helpers/validate-data.js"
import notifier from 'node-notifier'

function setTimer(hours, minutes, seconds) {
    const validatedTimerData = validateAndParseData(hours, minutes, seconds)

    const timerInMS = (
        validatedTimerData[0]* 60 * 60
         + validatedTimerData[1] * 60 
         + validatedTimerData[2]) 
         * 1000
    console.log(`Resulting timer in ms: ${timerInMS}`)
    setTimeout(() => {
        notifier.notify({
            title: 'Timer',
            message: `Timeout in ${hours} ${minutes} ${seconds} ended!`,
            icon: './public/image/alert_meme.jpg',
            sound: true
        }, function (err, response, metadata) {
            if(err) console.log(`Oops! An error occurred: ${err}`)
        })
        console.log('Timer ended!')
    }, timerInMS)
}

const [,, hours, minutes, seconds] = process.argv
setTimer(hours, minutes, seconds)