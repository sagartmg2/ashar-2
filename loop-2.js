
let products = [
    {
        "id": 1,
        "title": "iPhone 9",
        "price": 549,
    },
    {
        "id": 2,
        "title": "iPhone X",
        "price": 899,
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "price": 1249,
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "price": 280,
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "price": 499,
    },
    {
        "id": 6,
        "title": "Huawei P31",
        "price": 459,
    },
]

// console.log(products[0].title, products[0].price);

function printProductInfo(index) {
    console.log("-", products[index].title, products[index].price);
}

// printProductInfo(0)
// printProductInfo(1)


/* for loop // when we know the exact number of iterations/times some task is to be done */

/* 
    for (starting_point ; condition ; mutator){
        do some repetitive task. 
    }]
*/


for (let index = 0; index < products.length; index++) {
    console.log(` - price of ${products[index].title} is ${products[index].price}  `);
}

console.log("end loop");

/* arrow function */
/* array.forEach function */
