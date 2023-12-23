import { divide } from "../../3-calc/operators/divide.js"
import { add } from "./add.js"
import { extract } from "./extract.js"
import { multiply } from "./multiply.js"

export function addListenersOnOperators(calcEmmiter) {
    calcEmmiter.addListener('add', (firstNumber, secondNumber) => {
        calcEmmiter.emit('result', add(firstNumber, secondNumber))
    })
    calcEmmiter.addListener('extract', (firstNumber, secondNumber) => {
        calcEmmiter.emit('result', extract(firstNumber, secondNumber))
    })
    calcEmmiter.addListener('multiply', (firstNumber, secondNumber) => {
        calcEmmiter.emit('result', multiply(firstNumber, secondNumber))
    })
    calcEmmiter.addListener('divide', (firstNumber, secondNumber) => {
        calcEmmiter.emit('result', divide(firstNumber, secondNumber))
    })
}
