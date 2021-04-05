// TODO: Refactor the code snippet given below so that the output is the average of the numbers 1, 2, 3, 4, and 5, which is equal to 3.

var average, arr;
arr = [1, 2, 3, 4, 5];
average = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
 
    return sum / arr.length;
}
arr.sort((a, b) => a - b);
console.log(average(arr));
console.log(arr);

var operation = {
    a: 1,
    b: 2,
    firstName:"Testing",
    add: function() {
        this.a + this.b;
        console.log("a = " + this.a + ", b = " + this.b);
        var print = function() {
            console.log("a = " + this.a + ", b = " + this.b);
        }.bind(this)
 
        print();
    }
 }
 
 operation.add();
 
var employee = {
    firstName: "Srishti",
    lastName: "Gupta",
    get: function() {
        console.log(this.firstName + " " + this.lastName + " is an employee of our organization.");
        var print = function(role,comp) {
            console.log("Inner: " + this.firstName + " " + this.lastName + " I am a " + role + " at " + comp);
        }.bind(this, 'Manager','Sono')
        var test = function(role, comp) {
            console.log("Inner Call: " + this.firstName + " " + this.lastName + " I am a " + role + " at " + comp);
        }.call(this,'Dev','Sono')
        var test1 = function(role, comp) {
            console.log("Inner apply: " + this.firstName + " " + this.lastName + " I am a " + role + " at " + comp);
        }.apply(this,['Dev','Sono'])
    }
}
employee.get();

var test = {
    a:2,
    b:5,
    getSum: function(a,b){
        console.log(this.a + this.b);
        console.log(a+b);
    }
}

test.getSum(1,2);

var laptop = {
    company: "Apple",
    model: "Macbook Air",
    os: "macOS",
    set: function (company, model, os) {
        var setCompany = function (company) {
            this.company = company;
        }.bind(this, company);
 
        var setModel = function (model) {
            this.model = model;
        }.bind(this);
 
        var setOS = function (os) {
            this.os = os;
        }
 
        setCompany();
        setModel();
        setOS();
    },
    get: function() {
        console.log(this.company, this.model, this.os);
    }
 };
 
 laptop.set("Dell", "Inspiron", "Windows");
 laptop.get();

 var team = {
    participantOne: "Srishti",
    participantTwo: "Prateek",
    print: function () {
        /* TODO 1: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using bind() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
        var greetParticipants = function (){
            console.log("Welcome " + this.participantOne + " " + this.participantTwo);
        }.bind(this)
        greetParticipants();
    }
}

team.print();


var team = {
    participantOne: "Srishti",
    participantTwo: "Prateek",
    print: function () {
        /* TODO 2: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using call() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
        var greetParticipants = function (){
            console.log("Welcome " + this.participantOne + " " + this.participantTwo);
        }.call(this)
        
    }
}

team.print();


var team = {
    participants: ["Srishti", "Prateek"],
    print: function () {
        /* TODO 3: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using apply() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
        var greetParticipants = function (){
            console.log("Welcome " + this.participants[0] + " " + this.participants[1]);
        }.apply(this)
        
    }
}

team.print();

var person = {
    name: "Mayank Kumar",
    gender: "male"
 }
 
 var employee = {
    id: 1001
 }
 
 employee.__proto__ = person;
 console.log(person.__proto__);
 console.log(employee.__proto__);

 var side = 5;
console.log(calculateArea(side));


// Function to calculate area of a square
function calculateArea (side) {
   return side * side;
};

// Function to calculate volume of a square
var calculateVolume = function(side) {
   return side * side * side;
}
console.log(calculateVolume(side));

var laptop = {
    company: "Apple",
    model: "Macbook Air",
    os: "macOS",
    set: function (company, model, os) {
        var os1 = [];
        os1[0] = os;
        var setCompany = function (company) {
            this.company = company;
        }.bind(this, company);
 
        var setModel = function (model) {
            this.model = model;
        }.call(this, model);
 
        var setOS = function (os) {
            this.os = os;
        }.apply(this, os1);
        setCompany();
    },
    get: function () {
        console.log("Company = " + this.company + "\nModel = " + this.model + "\nOS = " + this.os);
    }
 };
 
 laptop.set("Dell", "Inspiron", "Linux");
 laptop.get();

 function placeit(status) {
    let message = "Function displayed";
    if(status) {
        let message = "Displayed true";
        console.log(message);
    }
    console.log(message);
 };

 placeit(true);