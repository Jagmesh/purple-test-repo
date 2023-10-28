import { EventEmitter } from 'node:events';
import { addListenersOnOperators } from './operators/add_listeners.js';

function calculate(calcData) {
    return new Promise((resolve) => {
        const [firstNumber, secondNumber, mathOperator] = calcData
        const calcEmmiter = new EventEmitter()
        calcEmmiter.addListener('result', (result) => resolve(result) )

        addListenersOnOperators(calcEmmiter)   
        
        switch(mathOperator) {
            case 'add':
            case 'extract':
            case 'multiply':
            case 'divide':
                calcEmmiter.emit(mathOperator, firstNumber, secondNumber)
                break;
            default:
                throw new Error('You have entered wrong mathOperator. Try using "add", "extract", "multiply" or "divide"')
        }
    })
}

async function main() {
    const [nodePath, appPath, ...calcData] = process.argv
    console.log(`Результат: ${await calculate(calcData)}`)
}

main()

