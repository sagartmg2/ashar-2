

let numbers = [2, 1, 4, 3, 5, 6, 7]
let evenNumbers = []

let oddNumbers = numbers.filter(el => {
    console.log("filtering")
    return undefined
})

console.log({ oddNumbers });

/* code here..  loop , if else,   modulous % , push   */

for (let index = 0; index < 7; index++) {
    // console.log("index", index);
    console.log("elmeent", numbers[index]);

    let arrayElement = numbers[index];

    if (arrayElement % 2 === 0) {
        evenNumbers.push(arrayElement)
    }

}

numbers.forEach((element, index) => {
    if (element % 2 === 0) {
        evenNumbers.push(element)
    }
})

console.log({ evenNumbers }); // [2,4,6]

// console.log(doubledNumbers); // [4,2,8,6....]


