import { divide } from "../../3-calc/operators/divide.js"
import { add } from "./add.js"
import { extract } from "./extract.js"
import { multiply } from "./multiply.js"
import { EventEmitter } from 'node:events';

export const calcEmmiter = new EventEmitter()

export function addListenersOnOperators() {
    const mathOperators = {
        add, divide, extract, multiply
    }

    for (const key in mathOperators) {
        calcEmmiter.addListener(key, (firstNumber, secondNumber) => {
            calcEmmiter.emit('result', mathOperators[key](firstNumber, secondNumber))
        })
    }
}
