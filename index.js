let response = {
    status: 200,
    result: {
        todos: [
            {
                name: "html",
                status: true,
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

// console.log(response.result.todos[0].title, "is", response.result.todos[0].status);
// console.log(response.result.todos[1].title, "is", response.result.todos[1].status);
// console.log(response.result.todos[2].title, "is", response.result.todos[2].status);


/* DRY donot reapeat yourself */


/*  
    function 

    arrow function 
*/

function printTodoStatus(index) {
    console.log(response.result.todos[index].name, "is", response.result.todos[index].status);
}

printTodoStatus(0)
printTodoStatus(1)
printTodoStatus(2)



/*  TODO:
    OUTPUT
    html is completed
    css is complted
    js is pending
*/