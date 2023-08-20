/* arthematic operators 
    +
    -
    /
    % // modolus
         10 & 3     // 1

    ++count
    count++
*/
/* comparision operators
    >
    >=
    <
    <=
    == // equality operators
    == // strict equality operators
*/

console.log(1 == "1"); // true 
console.log(1 === "1"); // false 
console.log(true === true); // false 


/* logical operators 
    AND    &&
        - each and every condition should meet
        - retursn true value only if all the conditions are met/true.
    OR  ||  (pipe sign)
        - returns true value if any one of the condition is true
    NOT  !
*/


/* legal age = 20 */
/*  */

let person1 = {
    age: 25,
    consent: true,
}

let person2 = {
    age: 20,
    consent: true
}

if ((person1.age >= 20 && person1.consent) && (person2.age >= 20 && person2.consent)) {
    console.log("they can marray");
} else {
    console.log("they cant");
}


let hasElectricity = false
let hasInternet = false

// if(true && true){
// if(true){

if (hasElectricity && hasInternet) {
    console.log("take class");
} else {
    console.log("sorry cant take class today ");
}





