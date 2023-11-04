export function validateAndParseData(timerData) {
    if(!timerData[0] || !/(\d+h)/.test(timerData[0])) {
        throw new Error('Invalid Hours parameter')
    }
    if(!timerData[1] || !/(\d+m)/.test(timerData[1])) {
        throw new Error('Invalid Minutes parameter')
    }
    if(!timerData[2] || !/(\d+s)/.test(timerData[2])) {
        throw new Error('Invalid Seconds parameter')
    }
    console.log(`Timer settings: ${timerData.join(' ')}`)
    return timerData.map((item) => Number(item.replace(/(h|m|s)/,'').trim()))
}