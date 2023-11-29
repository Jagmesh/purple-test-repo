export function validateAndParseData(hours, minutes, seconds) {
    if(!hours || !/(\d+h)/.test(hours)) {
        throw new Error('Invalid Hours parameter')
    }
    if(!minutes || !/(\d+m)/.test(minutes)) {
        throw new Error('Invalid Minutes parameter')
    }
    if(!seconds || !/(\d+s)/.test(seconds)) {
        throw new Error('Invalid Seconds parameter')
    }
    console.log(`Timer settings: ${timerData.join(' ')}`)
    return [hours, minutes, seconds].map((item) => Number(item.replace(/(h|m|s)/,'').trim()))
}