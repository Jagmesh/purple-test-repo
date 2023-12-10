import { addListenersOnOperators, calcEmmiter } from './operators/add_listeners.js';

function calculate(firstNumber, secondNumber, mathOperator) {
    return new Promise((resolve) => {
        const mathOperators = [
            'add', 'divide', 'extract', 'multiply'
        ]
         
        calcEmmiter.addListener('result', (result) => resolve(result) )

        addListenersOnOperators(calcEmmiter)        

        if(!mathOperators.includes(mathOperator)) {
            throw new Error('You have entered wrong mathOperator. Try using "add", "extract", "multiply" or "divide"')
        }

        calcEmmiter.emit(mathOperator, firstNumber, secondNumber)
    })
}

async function main() {
    const [,, firstNumber, secondNumber, mathOperator] = process.argv
    console.log(`Результат: ${await calculate(firstNumber, secondNumber, mathOperator)}`)
}

main()

