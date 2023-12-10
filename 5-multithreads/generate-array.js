export function generateArray(numberOfElements) {
    const tempArray = []
    for(let i= 1; i < numberOfElements+1 ; i++) {
        tempArray.push(Math.floor(Math.random()*numberOfElements))
    }
    return tempArray;
}