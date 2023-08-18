let response = {
    status: 200,
    result: {
        todos: [
            {
                name: "html",
                status: false,
            },
            {
                name: "css",
                status: true,
            },
            {
                name: "js",
                status: false,
            }
        ]
    }
}

// if(response.result.todos[0].status){
//     console.log(` ${response.result.todos[0].name} is  completed  `);
// }else{
//     console.log(` ${response.result.todos[0].name} is  pending  `);
// }


// if(response.result.todos[1].status){
//     console.log(` ${response.result.todos[1].name} is  completed  `);
// }else{
//     console.log(` ${response.result.todos[1].name} is  pending  `);
// }


function printTodoStatus(index) {

    let compltedStatus = response.result.todos[index].status
    let name = response.result.todos[index].name

    // if (compltedStatus) {
    //     console.log(` ${name} is  completed  `);
    // } else {
    //     console.log(` ${name} is  pending  `);
    // }

    console.log(` ${name} is  ${compltedStatus ? "complted" : "pending"}  `);

}

printTodoStatus(0)
printTodoStatus(1)
printTodoStatus(2)


// function  - if-else
//  ternary operator

/*  TODO:
    OUTPUT
    html is completed
    css is complted
    js is pending
*/


function toTodoStatus(index) {

    if (response.result.todos[index].status) {
        // console.log(response.data.todos[index].title, "is", response.data.todos[index].status = "Completed");
        console.log(`${response.result.todos[index].name} is ${response.result.todos[index].status} Completed`);
    } else {
        console.log(response.result.todos[index].name, "is", response.result.todos[index].status = "Pending");
    }
}

toTodoStatus(0)
toTodoStatus(1)
toTodoStatus(2)
