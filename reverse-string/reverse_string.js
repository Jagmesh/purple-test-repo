function reverseString(str) {
    return str.split('').reduce((accum, item)=> item + accum)
}

const str = 'node'
console.log(`Reversed string: ${reverseString(str)}`)