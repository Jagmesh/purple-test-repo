import { add } from "./operators/add.js"
import { divide } from "./operators/divide.js"
import { extract } from "./operators/extract.js"
import { multiply } from "./operators/multiply.js"

function calculate(calcData) {
    const [firstNumber, secondNumber, mathOperator] = calcData
    
    switch(mathOperator) {
        case 'add':
            return add(firstNumber, secondNumber)
        case 'extract':
            return extract(firstNumber, secondNumber)
        case 'multiply':
            return multiply(firstNumber, secondNumber)
        case 'divide':
            return divide(firstNumber, secondNumber)
        default:
            throw new Error('You have entered wrong mathOperator. Try using "add", "extract", "multiply" or "divide"')
    }
}

const [nodePath, appPath, ...calcData] = process.argv
console.log(calculate(calcData))