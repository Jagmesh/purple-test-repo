import {parentPort, workerData} from 'worker_threads'
function findDividableByThree(numberArray) {
    let dividableByThree_counter = 0;
    for (const numberArrayElement of numberArray) {
        if (numberArrayElement % 3 === 0) {
            dividableByThree_counter++;
        }
    }

    return dividableByThree_counter
}

parentPort.postMessage(findDividableByThree(workerData))