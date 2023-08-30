let numbers = [2, 1, 4, 3, 5, 6, 7]


const checkEvenNumber1 = (input) => {
    if (input % 2 === 0) {
        return true;
    }
    return false;

    /* ternary operator */

}
const checkEvenNumber = (input) => {
    return input % 2 === 0
    return input % 2 == 0 ? true : false

}

console.log(checkEvenNumber(1))
console.log(checkEvenNumber(4))

// let evenNumbers = numbers.filter(checkEvenNumber)
let evenNumbers1 = numbers.filter((number) => {return number % 2 === 0})
let evenNumbers = numbers.filter((number) => number % 2 === 0)

// console.log({ evenNumbers });




let oddNumbers = numbers.filter(el => {
    // console.log("filtering")
    /* 
     ! not operator  
     
     !true // false
     !false // true
    */

    if (el % 2 !== 0) {
        return true
    }
})


console.log({ oddNumbers });