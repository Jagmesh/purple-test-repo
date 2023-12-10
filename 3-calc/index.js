import { add } from "./operators/add.js"
import { divide } from "./operators/divide.js"
import { extract } from "./operators/extract.js"
import { multiply } from "./operators/multiply.js"

function calculate(firstNumber, secondNumber, mathOperator) {
    const mathOperators = {
        add, divide, extract, multiply
    }
   
    if(!Object.hasOwnProperty.call(mathOperators, mathOperator)) {
        throw new Error('You have entered wrong mathOperator. Try using "add", "extract", "multiply" or "divide"')
    }

    return mathOperators[mathOperator](firstNumber, secondNumber);
    //Если я использую такую форму записи, то у меня нет подсказок, какие аргументы принимает функции
}

const [,, firstNumber, secondNumber, mathOperator] = process.argv
console.log(calculate(firstNumber, secondNumber, mathOperator))