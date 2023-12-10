import {generateArray} from "../generate-array.js";
import {findDividableByThree} from "./find-dividable-by-three.js";

function main() {
    const numberArray = generateArray(100 * 1000 * 1000)

    performance.mark('start')
    const dividableByThree_counter = findDividableByThree(numberArray)

    console.log(`Number of numbers that can be divided by 3: ${dividableByThree_counter}`)
    console.log(`findDividableByThree() duration: ${performance.measure('main', 'start').duration}`)
}

main()