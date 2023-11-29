import {Worker} from 'worker_threads'
import {generateArray} from "../generate-array.js";

function work(numberArray) {
    return new Promise((resolve) => {
        const worker = new Worker('./find-dividable-by-three.js', {
            workerData: numberArray
        })

        worker.on('message', (value) => resolve(value))
    })
}

function chunkArray(array, numberOfChunks) {
    const chunkSize = Math.ceil(array.length/numberOfChunks)
    return Array.from({length: numberOfChunks}, (v,i) =>
        array.slice(i * chunkSize, i * chunkSize + chunkSize)
    )
}

async function main() {
    const numberArray = generateArray(100 * 1000 * 1000)
    const chunkedArray = chunkArray(numberArray, 4)

    performance.mark('start')

    const dividableByThree_counters = await Promise.all([
        work(chunkedArray[0]),
        work(chunkedArray[1]),
        work(chunkedArray[2]),
        work(chunkedArray[3])
    ])

    console.log(`Number of numbers that can be divided by 3: ${dividableByThree_counters
        .reduce((prevValue, currentValue) => prevValue+currentValue)}`)
    console.log(`main() duration: ${performance.measure('main', 'start').duration}`)
}

main()