let db_users = [
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
    { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
    { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
    { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    { name: 'Amit', email: 'amit@gmail.com', password: 'amit4' },
    { name: 'Anjana', email: 'anjana@gmail.com', password: 'anjana5' },
    { name: 'Bijay', email: 'bijay@gmail.com', password: 'bijay6' },
    { name: 'Bikash', email: 'bikash@gmail.com', password: 'bikash7' },
    { name: 'Subash', email: 'subash@gmail.com', password: 'subash33' },
    { name: 'Suman', email: 'suman@gmail.com', password: 'suman34' },
    { name: 'Sunil', email: 'sunil@gmail.com', password: 'sunil35' },
    { name: 'Sushil', email: 'sushil@gmail.com', password: 'sushil36' },
    { name: 'Urmila', email: 'urmila@gmail.com', password: 'urmila37' },
    { name: 'Yogesh', email: 'yogesh@gmail.com', password: 'yogesh38' }
]

function loginUser1(inputEmail, inputPassword) {

    let matched = false; // by default matched status is false and only set to true is email-password matches

    for (let index = 0; index < db_users.length; index++) {

        let selectedUser = db_users[index]

        if (selectedUser.email == inputEmail && selectedUser.password == inputPassword) {
            // console.log("email,password matched. logged in", index);
            matched = true;
        }

    }

    if (matched) {
        console.log("logged in ");
    } else {
        console.log("invalid createdentails....");
    }

}

const loginUser = (inputEmail, inputPassword) => {

    let matched = false; // by default matched status is false and only set to true is email-password matches

    db_users.forEach((selectedUser) => {
        if (selectedUser.email == inputEmail && selectedUser.password == inputPassword) {
            matched = true;
        }
    })

    if (matched) {
        console.log("logged in ");
    } else {
        console.log("invalid createdentails....");
    }

}

loginUser("aarav@gmail.com", "aarav000") // login succesffull.
loginUser("urmila@gmail.com", "urmila37") // login succesffull.


/* 
TODO:
    create a function to check the email and password for a user 

    NOTE: we have lots of user , we have to check through each data. 

OUTPUT:
    loginUser("yogesh@gmail.com","yogesh38" ) // login successful
    loginUser("urmila@gmail.com","urmila37") // login successful
    loginUser("urmila@gmail.com","urmila-wrong") // Invalid Credential
*/






/* forEach */
/* map */
/* filter */
/* find */

