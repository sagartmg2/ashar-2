/* ARTHEMATIC OERPATORS */
/* 
    +
    -
    * multiplication
    /  division
    % modoulus // gives us remainder 

*/

// console.log( 10 % 3 );


/* ASSIGNMENT operstors */

let name = "ram"
let count = 0
count = 1

count = count + 1   // 2
count += 1  // 3


console.log(count);

/* increment and decrement
    post increment 
    pre increment
*/

let number = 100
number++  //101  // post-increment
// ++number  //102  // pre-increment

console.log({ number });


let price = 100

// console.log(price++);
// console.log(price);

console.log(++price);
console.log(price);
console.log(--price);

/*  COMPARISION OPERATORS  */

console.log(100 > 10);
console.log(100 < 10);


console.log(100 >= 100);
console.log(50 <= 100);

console.log(100 == 100);
console.log(50 == 100);
console.log("hello" == "hello");
console.log("hello" == "Hello");
console.log("hello" == "hello ");

console.log(1 == "1");  // typecast  , type cohersion
console.log("hello" + "world");  //  addition of string is called    string concatentation
console.log("hello" - "world");  // NaN     not a number
console.log("1" + 1);  //   11   cause we can contact two string
console.log("1" - 1);  //   0   
console.log("one" - 1);  //   NaN 


console.log(1 == "1"); // true // typecast  , type cohersion is automatically happening in this case
console.log(1 === "1"); // false  // strict equality operator // checks for the data types too
console.log("1" === "1"); // true  // strict equality operator // checks for the data types too



// if (1 === 1) {
//     console.log("true");
// }

function calcualte(num1, num2, type) {
    if (type === "MINUS") {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (type === "MULTIPLY") {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    } else {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
}


calcualte(1, 2, "ADD")  // 1 + 2  = 3
calcualte(10, 5, "MINUS")  // 10 - 5  = 5
calcualte(10, 5, "MULTIPLY")  // 10 * 5  = 50
calcualte(10, 5)  // 10 + 5  = 15

/* arrow function  */