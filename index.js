
let numbers = [5, 6, 7]

const double = (inputNumber, index) => {
    console.log({ inputNumber }, { index })
    return inputNumber * 2
}
// const triple = inputNumber => {
//     return inputNumber * 3
// }

const triple = inputNumber => inputNumber * 3

console.log("triple of 2 ", triple(2));
console.log("triple of 4", triple(4));

// for (let index = 0; index < numbers.length; index++) {
//     // doubledNumbers.push( numbers[index] * 2  )
//     double(numbers[index], index)
// }

let doubledNumbers = numbers.map(double)

let doubledNumbers2 = numbers.map((number) => {
    console.log({ number })
    return number * 2
})

// let tripleNumbers = numbers.map((number) => { return number * 3 })
let tripleNumbers = numbers.map(number => number * 3)


console.log({ doubledNumbers });
console.log({ tripleNumbers });


// console.log(double(2));
// console.log(double(1));
// console.log(double(4));



