console.log("\n");

// let ourCondition = true

// if (ourCondition) {
//     console.log("yes");
// }else{
//     console.log("no");
// }


let willRain = true
let hasProbablity = true
let isSunny = false


/* 
    if (willRain) {
        console.log("take umbrealla");
    } else {

        if (hasProbablity) {
            console.log("you make take");
        } else {
            console.log("no need");
        }

    }
*/

if (willRain) {
    console.log("take umbrealla - it will rain ");
} else if (hasProbablity) {
    console.log("you make take");
}else if(isSunny){
    console.log("take umbrella its hot");
}else{
    console.log("no need");
}







if (willRain) {
    console.log("take umbrealla");
} else {
    console.log("no need")
}

/*  ternary operator */
console.log(willRain ? "take umbrealla" : "no need");
console.log(willRain ? "take umbrealla" : (hasProbablity ? "you make take" : "no need"));
