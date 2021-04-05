let promiseObj = new Promise ((resolve, reject) => {
    //producing Code
    console.log("Producing Function Exec");
});

console.log(promiseObj);

let promise1 = new Promise ((resolve, reject) => {
    let name = 'Srishti';
    resolve(name);
});

//let promise2 = new Promise ((resolve, reject) => {
//    reject('Some error occurred!');
//});

console.log(promise1);
//console.log(promise2);

let promise3 = new Promise ((resolve, reject) => {
    console.log("Getting the Data from DB....");
    setTimeout(() => {
        console.log("Recvied the Data...");
        resolve("Sudhi");
    }, 3000);
});

console.log(promise3);

promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
        reject(new Error("Error getting name"));
    }, 3000);
});

console.log(promiseObj);

let promise4 = new Promise ((resolve, rejected) => {
    console.log("Getting Email of logged in User");
    setTimeout(() => {
        //resolve("sudhi@gmail.com");
        rejected(new Error("Could not get email from server!"));
    }, 2000);
});

//promise4.then(successcallback, errorcallback);

promise4.then((resolvedParameterval) => {
    //code to be eecuted when promise is reslved;
}, (rejectedErr)=> {
    //coe when promise rejected
});

let promise5 = new Promise ((res, rej)=>{
    console.log("Getting the name from DB");
    setTimeout(() => {
        //res("Sudhi");
        rej(new Error("Error while getting from DB"));
    }, 3000);
});

promise5.then((val)=>{
    console.log(`promise5 returned success with value ${val}`)
},(err)=>{
    console.log(`promise5 returned error with code ${err}`);
});

/* TODO 1: Create a promise with the producer code which gets the email given in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
// TODO 2: Inside the producer code, invoke the resolve() callback while passing in the email given in the question as the argument
let promiseObj1 = new Promise((resolve, reject) =>{
    console.log("Getting email from server...");
    setTimeout(() => {
        //resolve("srishti.gupta@upgrad.com");
        reject(new Error("Could not get email from server!"));
    }, 2000)    
});
// TODO 3: Define a then() consumer method which has two arguments - one as the successCallbackHandler and the other as the errorCallbackHandler
promiseObj1.then((successCallbackHandler)=>{
    console.log(`Email: ${successCallbackHandler}`);
},(errorCallbackHandler)=>{
    console.log(errorCallbackHandler);
});
// TODO 4: Print the email received as an argument in the successCallbackHandler of the then() method