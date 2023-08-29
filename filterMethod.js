let numbers = [2, 1, 4, 3, 5, 6, 7]
let evenNumbers = []

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