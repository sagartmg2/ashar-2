/* 

    function sum(input1, input2) {
        let result = input1 + input2
        // return undefined  // by default function returns undefined.
        return result // 3
        console.log("after return");
    } 


*/

/* arrow function  */

const sumOld = (input1, input2) => {
    return input1 + input2
}


const sum = (input1, input2) => input1 + input2
console.log(sum(1, 2))



doSomething() // Hoisting 

function doSomething() {
    console.log("done............");
}




// console.log(typeof ("hello"))

