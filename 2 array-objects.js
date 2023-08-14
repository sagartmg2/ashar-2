/* 
    comment
        single line - ctrl + /
        multi-line  or block comment
            alt + shift + a

*/

/* variables */
/* data-types
    -string - text
    -number 
    -boolean -> true / false
    - undefined (JS specific) // when a variable is declared but not initialized.
    - null // empty // explicitely defining things as empty


    non-primitive / collections
        - array 

*/
let color = "red"
color = "orange"
let isHoliday = false

/* declartion and initialization */

let count = 100
count = 200


let brand // varaible declared only
brand = "apple" // initialization
brand = "samsung" // re-initilaztion

console.log("brand", brand);



let length
console.log("length", length)

let width
console.log("width", width)

let data = null
console.log("data", data);


/* let vs const 

    when using let , variables can only be declared/created once BUT re-initialzied again and again. 

    const - CONSTANT VARAIBLES
    CANNOT BE RE-INITIALZED
*/


let totalPrice = 1000
// let price = 2000 // error
price = 2000

const PI = 3.14
// PI = 3.1455  // ERROR // constant varaible cannot be changed.

const USER_ROLE = "buyer"


/* ARRAY
    - collection of multiple values
    - MOSTLY - collection of similar data-types
*/

let names = ["ram", "hari", "shyam"]
let evenNumbers = [2, 4, 6, 8, 10]

console.log("names", names);
console.log("evenNumbers", evenNumbers);

let ages = [10, 20, 30, 40]
console.log("ages", ages);

/* temp = temporary vairable */
let temp = [1, 2, 3, 4, "five", null, undefined] // wrong way 
console.log("temp", temp);

// let projector1 = "vivetek"
// let projector1Price = 50000
// let projector1Color = "white"


let projector1 = {
    brand: "vivetek",
    price: 500000,
    color: "white",
    isWorking: true,
}


let projector2 = "acer"
let projector2Price = 40000
let projector2Color = "balck"


/* Object // same as our real life objects 

    let <objectName>  = { 
        <key or attribute or property> : <value>,
        <key> : <value>,
        <key> : <value>,
        <key> : <value>,

     }

*/

let projector3 = {
    brand: "acer",
    price: 40000,
    color: "black",
    isWorking: false
}

console.log("proejctor3", projector3);


let brand1 = {
    name: "apple",
    url: "apple.inc"
}
let brand2 = {
    name: "lg",
    url: "lg.com"
}
let brand3 = "nokia"
let brand4 = "samsung"


console.log("multile brands are ", brand1, brand2, brand3, brand4);


// let brands = ["apple", "lg", "nokia", "samsung"]
let brands = [brand1, brand2, brand3, brand4]
console.log("brands", brands);


let person1 = {
    name: "ram bdr",
    age: 10
}
let person2 = {
    name: "ram kumar",
    age: 20
}


let persons = [
    person1,
    person2,
    {
        name: "hari",
        age: 30
    },
    {
        name: "shyam",
        age: 40
    }
]

console.log("persons", persons);