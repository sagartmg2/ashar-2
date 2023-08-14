console.log("\n");

/* varaibles */
/* data types 
    primitive data-types
        string
        number
        boolean
        undefined
        null
    
    non-primitive // collections
        - array
*/

let firstName // declartion
firstName = "ram" // initialization
firstName = "hari" // re-initalzaiton

let lastName = "sharma" // declartion and initialzation.
console.log("firstNmae", firstName)

let fullName = firstName + " " + lastName

console.log(fullName)

let num1 = 1
let hasRead = true

// let student1 = "xyz"
// let student2 = "abc"

/* Array 
    - collection of different values
    - mostly collection of similar values / similar data-types

    let <arrayName> = [  <element>, <2nd element> , <3rd element>   ]

        Index -- always starts with 0
    let <arrayName> = [ 0th index,1st index   ]
*/

let students = ["abc", "def", "ijk", "abc"]
// let studentNames = ["abc", "def", "ijk", "abc"]
/* code below */

console.log(students)
console.log("before - in 0th index", students[0])
console.log("in 1st index", students[1])

// students[0] = "ram(emaiL:ram@ram.com,phone:) "
students[0] = "ram "
students[1] = "shyam"
students[2] = "laxman"
students[3] = "ram"
console.log("after - in 0th index", students[0])
console.log(students)

/* Objects
    let <objName>  = {
        <key> : <value>,
        <key> : <value>,
        <key> : <value>,
    }
*/

let student1 = {
    name: "ram",
    phone: "98XX",
    age: 20,
    address: "ktm"
}
let student2 = {
    name: "shyam",
    phone: "98XX",
    age: 21,
    address: {
        province: "bagmati",
        district: "ktm",
        ward: "16",
        tole: "abc"
    }
}
let student3 = {
    name: "laxman",
    phone: "98XX",
    age: 21
}


let student4 = {
    name: "ram bdr",
    phone: "984XX",
    age: 22
}

console.log(student1);

students[0] = student1
students[1] = student2
students[2] = student3
students[3] = student4
console.log(students)


console.log("before",student4.phone)
student4.phone = 9860234
console.log("after",student4.phone)

console.log("\n");
