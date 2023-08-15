console.log("\n");

/* Objects  // real life object
    let <objName>  = {
        <key> : <value>,
        <key> : <value>,
        <key> : <value>,
    }
*/

// let course1 = {
//     name: "Mern",
//     duration: "1 month"
// }

// console.log("duraation of ", course1.name, "is", course1.duration);


// course1.duration = "3 months"

// console.log("duraation of ", course1.name, "is", course1.duration);



/*

let courses = ["rn", "web", "ptython"]

courses[0] = "MERN stack"
courses[2] = "web development"
courses[2] = "python with django"


*/
let courses = [
    {
        index: 0,
        name: "Mern",
        duration: "1 month", // TODO: change this to 3 months
        students: [
            { name: "ram", age: 10 }
        ]
    },
    {
        index: 1,
        name: "Web",
        duration: "1 month"
    },
    {
        index: 2,
        name: "python",
        duration: "4 month"
    }
]

/* code here.. */
console.log(courses[0].duration);

courses[0].duration = "3 months"

console.log(courses);






















console.log("\n");
