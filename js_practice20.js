let namePromise = new Promise ((resolve, reject)=>{
    console.log("Getting email from server...");
    setTimeout(() => {
        resolve("srishti.gupta@upgrad.com");
    }, 3000);
});

let getEmail = async () => {
    try {
        let name = await namePromise;
        console.log(`Email = ${name}`);
    } catch (err) {
        console.log(`Error occurred ${err}`);
    }
}

getEmail();


// USING PROMISES
// function to fetch details of user in Student Management System
/* const fetchUserDetails = (username, password) => {
    database.authenticateUser(username, password)
        .then(userInfo => dataBase.getRoles(userInfo))
        .then(rolesInfo => dataBase.getPermissions(rolesInfo))
        .then(permissionsInfo => {
            // code written inside the function named 'callback'
        })
        .catch((err) => {
            // code to handle error
        });
};
 */