// ES5 Syntax
//setTimeout(function() { code to be executed. }, timeInMs);

var beta = function() {
    console.log("Entered beta!");
    setTimeout(function () {
        console.log("Inside beta!");
    }, 2000);
    console.log("Exited beta!");
 }
 
 var alpha = function () {
    console.log("Entered alpha!");
    setTimeout(function() {
        beta();
    }, 2000);
    console.log("Exited alpha!");
 }
 
 alpha();

 function alert1() {
     alert('Hi');
 }

 function calculate() {
     for(i=0;i<=100;i++) {
        i++;
        //j = i;
        //console.log(i,j);
     }
     alert('Calculated value = ' + i);
 }

 const foo = (anotherFunction) => {
    console.log("Inside foo");
    anotherFunction();
 }
 
 const bar = () => {
    console.log("Inside bar");
 }
 
 foo(bar);

 
 let sum = (x,y) => {
     console.log("addition", x + y);
 }

 let multiple = (x, y) => {
    console.log("Multiply", x * y);
 }

 function operate(x,y,oprate) {
    return oprate(x,y);
 }

 operate(3,4,sum);
 operate(3,4,multiple);

 let add = (callback) => {
    let x =2; y = 3;
    console.log("Sum ", x +y);   
    callback();
}

add(() => {
    console.log("Finished addition");
})

let displaymsg = () => {
    console.log("Process finished");
}

let subract = (display1) => {
    let x=2; y=6;
    console.log("Sub ", x-y);
    display1();
}

subract(displaymsg);

//.addEventListener('eventName', eventHandlerCallback);

//.addEventListener('eventName', () => {
    // code to be executed when the specified event (eventName) is fired
//});

const getDetails = (callback) => {
    setTimeout(() => {
        let details = {
            firstName: "Srishti",
            lastName: "Gupta",
            gender: "female"
        }
 
        callback(details);
    }, 2000);
 }
 
 const printDetails = (details) => {
    for (let key in details) {
        console.log(`${key} : ${details[key]}`);
    }
 }
 
 getDetails(printDetails);
