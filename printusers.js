/* output

    TODO:  using the response variable below 

    email of Terry is  atuny0@sohu.com
    email of Sheldon is  hbingley1@plala.or.jp
*/

let response = {
    "users": [
        {
            "id": 1,
            "firstName": "Terry",
            "lastName": "Medhurst",
            "maidenName": "Smitham",
            "age": 50,
            "gender": "male",
            "email": "atuny0@sohu.com",
            "phone": "+63 791 675 8914",
            "username": "atuny0",
            "password": "9uQFF1Lh",
            "birthDate": "2000-12-25",
            "image": "https://robohash.org/hicveldicta.png",
            "bloodGroup": "A−",
            "height": 189,
            "weight": 75.4,
            "eyeColor": "Green",
            "hair": {
                "color": "Black",
                "type": "Strands"
            },
            "domain": "slashdot.org",
            "ip": "117.29.86.254",
            "address": {
                "address": "1745 T Street Southeast",
                "city": "Washington",
                "coordinates": {
                    "lat": 38.867033,
                    "lng": -76.979235
                },
                "postalCode": "20020",
                "state": "DC"
            },
            "macAddress": "13:69:BA:56:A3:74",
            "university": "Capitol University",
            "bank": {
                "cardExpire": "06/22",
                "cardNumber": "50380955204220685",
                "cardType": "maestro",
                "currency": "Peso",
                "iban": "NO17 0695 2754 967"
            },
            "company": {
                "address": {
                    "address": "629 Debbie Drive",
                    "city": "Nashville",
                    "coordinates": {
                        "lat": 36.208114,
                        "lng": -86.58621199999999
                    },
                    "postalCode": "37076",
                    "state": "TN"
                },
                "department": "Marketing",
                "name": "Blanda-O'Keefe",
                "title": "Help Desk Operator"
            },
            "ein": "20-9487066",
            "ssn": "661-64-2976",
            "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
        },
        {
            "id": 2,
            "firstName": "Sheldon",
            "lastName": "Quigley",
            "maidenName": "Cole",
            "age": 28,
            "gender": "male",
            "email": "hbingley1@plala.or.jp",
            "phone": "+7 813 117 7139",
            "username": "hbingley1",
            "password": "CQutx25i8r",
            "birthDate": "2003-08-02",
            "image": "https://robohash.org/doloremquesintcorrupti.png",
            "bloodGroup": "O+",
            "height": 187,
            "weight": 74,
            "eyeColor": "Brown",
            "hair": {
                "color": "Blond",
                "type": "Curly"
            },
            "domain": "51.la",
            "ip": "253.240.20.181",
            "address": {
                "address": "6007 Applegate Lane",
                "city": "Louisville",
                "coordinates": {
                    "lat": 38.1343013,
                    "lng": -85.6498512
                },
                "postalCode": "40219",
                "state": "KY"
            },
            "macAddress": "13:F1:00:DA:A4:12",
            "university": "Stavropol State Technical University",
            "bank": {
                "cardExpire": "10/23",
                "cardNumber": "5355920631952404",
                "cardType": "mastercard",
                "currency": "Ruble",
                "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML"
            },
            "company": {
                "address": {
                    "address": "8821 West Myrtle Avenue",
                    "city": "Glendale",
                    "coordinates": {
                        "lat": 33.5404296,
                        "lng": -112.2488391
                    },
                    "postalCode": "85305",
                    "state": "AZ"
                },
                "department": "Services",
                "name": "Aufderhar-Cronin",
                "title": "Senior Cost Accountant"
            },
            "ein": "52-5262907",
            "ssn": "447-08-9217",
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30"
        },
        {
            "id": 3,
            "firstName": "Terrill",
            "lastName": "Hills",
            "maidenName": "Hoeger",
            "age": 38,
            "gender": "male",
            "email": "rshawe2@51.la",
            "phone": "+63 739 292 7942",
            "username": "rshawe2",
            "password": "OWsTbMUgFc",
        },
    ],
}

// console.log("email of ", response.users[0].firstName, "is", response.users[0].email);
// console.log("email of ", response.users[1].firstName, "is", response.users[1].email);
// console.log("email of ", response.users[2].firstName, "is", response.users[2].email);
// console.log("gender of ", response.users[2].firstName, "is", response.users[2].gender);


/* function  // re-usalble

    function <functionName>(){
        // do some task..
    }

*/

// function printInfo(index) { // index is called parameter
//     // console.log("index",index)
//     console.log("gender of ", response.users[index].firstName, "is", response.users[index].gender);
// }


const printInfo = (index) => {
    console.log("gender of ", response.users[index].firstName, "is", response.users[index].gender);
}

/* calling a function, executing a function */
printInfo(0) // 0 is argument
printInfo(1) // 1 is argument
printInfo(2)


// calsuclate sum of two numbers
// console.log("the sum of 1 and 2 is ", 1 + 2);
// console.log("1 + 2  = ", 1 + 2);
// console.log("1 + 3  = ", 1 + 3);
// console.log("2 + 5  = ", 2 + 5);

// function calculateSum(num1, num2) {
//     // console.log("num1", num1);
//     // console.log({ num2 });

//     // console.log(num1, "+", num2, "=", num1 + num2);
//     // console.log(`${num1} + ${num2} = ${num1 + num2} `);
//     console.log(`the sum of ${num1} and ${num2} is ${num1 + num2} `);
// }

const calculateSum = (num1, num2) => {
    console.log(`the sum of ${num1} and ${num2} is ${num1 + num2} `);
}

calculateSum(1, 2)
calculateSum(1, 3)
calculateSum(2, 5)


/*
    calculateSum(2, 5, 7, 10, 23, 45, 50)
    rest operator
    for loop 
        forEach
  */



let greeting = "hello"
let name = "ram"

console.log(greeting, name)
/* template literal
    back tick `   // just below esc key

*/

console.log(`${greeting}  ${name} `);
