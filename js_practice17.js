let promisObj = new Promise((resolve, reject)=>{
    console.log("promise getting from db");
    setTimeout(() => {
        //resolve("test")
        reject(new Error("promise error occurred"));
    }, 2000);
}
);
console.log(promisObj);
//promisObj.catch(ErrorCallback);

promisObj.catch ((err)=>{
    //code to be executed
    console.log(`Error ${err}`);
});

let promisObj1 = new Promise((resolve, reject)=>{
    console.log("promise1 getting from db");
    setTimeout(() => {
        //resolve("promise 1 test")
        reject(new Error("promise1 error occurred"));
    }, 2000);
}
);

promisObj1.then((val)=>{
    console.log(val);
});

promisObj1.catch((err)=>{
    console.log(err);
});
