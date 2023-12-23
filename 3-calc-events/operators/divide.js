import { calcEmmiter } from ".."

export function add(firstNumber, secondNumber) {
    calcEmmiter.addListener('add', (firstNumber, secondNumber) => {
        calcEmmiter.emit('result', Number(firstNumber) / Number(secondNumber))
    })
}