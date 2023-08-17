
console.log("\n");

let brand = "apple"
// let brands = "apple,samsung,lg"



/* 
    Array 
    INDEX -> always starts with 0
 */
let brands = ["apple", "samsung"]

console.log("before index 1", brands[1]);
brands[1] = "LG"
console.log("after index 1", brands[1]);
brands[2] = "oppo"
console.log("brands", brands);

/* Object */

let company1 = {
    name: "apple",
    ceo: "Steve",
    url: "wrongurl.com",
    stakeholders: [
        "ram", "hari"
    ]
}
let company2 = {
    name: "lg",
    ceo: "abc",
    url: "wrongurl.com",
    stakeholders: [
        "abc", "xyz"
    ]
}





console.log(company1.url);
company1.url = "righturl.com"
console.log("before - headqurter", company1.headquarter);
company1.headquarter = "new york"

console.log("after - headqurter", company1.headquarter);

/* TODO: code here add person shyam to stakeholders */
console.log("stakeholders", company1.stakeholders);
// company1.stakeholders = ["ram","hari","shyam"]
company1.stakeholders[2] = "shyam"
console.log(company1);



let companies = [
    {
        name: "apple",
        ceo: {
            name:"steve"
        },
        url: "wrongurl.com",
        stakeholders: [
            {
                name: "ram",
                phone: null
                // TODO: replace phone by 98404444
            }
        ]
    },
    {
        name: "lg",
        ceo: "abc",
        url: "wrongurl.com",
        stakeholders: [
            "abc"
            // TODO: add xyz here as another stakeholder
        ]
    }
]

companies[0].stakeholders[0].phone = 98404444

console.log("_____");
// companies[1].stakeholders[1] = "xyz"
console.log(companies[0]);


console.log("\n");