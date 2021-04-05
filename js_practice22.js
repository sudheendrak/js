/* var orderId = null;

var placeOrder = (callback) => {
   console.log("Placing order...");
   setTimeout(function () {
       orderId = "101";
       callback(orderId);
   }, 2000);
}

var printOrderID = function (orderId) {
   console.log("Order ID = " + orderId);
}

placeOrder(printOrderID); */


/* var loadImage1 = new Promise(function (resolve, reject) {
    console.log("Example 1: Loading image...");
    setTimeout(function () {
        var imageUrl = "Desktop/image.png";
        resolve();
    }, 2000);
 });
 
 loadImage1.then(function () {
    console.log("Image loaded successfully!");
 }, function (error) {
    console.log(new Error(error));
 });
 
 // Example 2
 var loadImage2 = new Promise(function (resolve, reject) {
    console.log("Example 2: Loading image...");
    setTimeout(function () {
        var imageUrl = "Desktop/image.png";
        reject(new Error("Error in loading image!"));
    }, 2000);
 }); */
 
/*  var x = 22;
var a = 5, b;

function foo() {
   var y = 7;
   b = 2;
}

//console.log(x / y);
console.log(a / b); */

/* var person = {
    name: "Mayank Kumar",
    gender: "male"
 }
 
 var employee = {
    id: 1001
 }
 
 employee.__proto__ = person;
 console.log(person.__proto__);
 console.log(employee.__proto__); */

 /* var side = 5;
console.log(calculateArea(side));
console.log(calculateVolume(side));

// Function to calculate area of a square
function calculateArea (side) {
   return side * side;
};

// Function to calculate volume of a square
var calculateVolume = function(side) {
   return side * side * side;
} */

/* 
var title = "A Passage to India";
var author = "E.M. Forster";

var novel = {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   get: function() {
       console.log("Title = " + this.title + ", Author = " + this.author);
        console.log(this)
       var print = function() {
           console.log("Title = " + this.title + ", Author = " + this.author);
           console.log(this);
       }
       print();
   }
}

novel.get(); */
/* var laptop = {
    company: "Apple",
    model: "Macbook Air",
    os: "macOS",
    set: function (company, model, os) {
        var setCompany = function (company) {
            this.company = company;
        }.bind(this, company);
 
        var setModel = function (model) {
            this.model = model;
        }.call(this, model);
 
        var setOS = function (os) {
            this.os = os;
        }.apply(this, os);
    },
    get: function () {
        console.log("Company = " + this.company + "\nModel = " + this.model + "\nOS = " + this.os);
    }
 };
 
 laptop.set("Dell", "Inspiron", "Windows");
 laptop.get(); */
 /* function login(loggedIn) {
    message = "Please login!";
    console.log(message);
    if (loggedIn) {
        name = "Srishti";
        let name;
        var message = "Welcome " + name + "!";
        console.log(message);
    }
 }
 
 login(true); */
 /* class Person {
    constructor() {
        console.log("I am a person.");
    }
 }
 
 class Employee extends Person {
    constructor() {
        console.log("I am an employee.");
    }
 }
 
 let p = new Person();
 let e = new Employee(); *//* 
 const userDetails = ["Sachin", "Ramesh", "Tendulkar"];
const [lastName, , firstName] = userDetails;
console.log(firstName, lastName); */
var orderId = null;

var placeOrder = (callback) => {
   console.log("Placing order...");
   setTimeout(function () {
       orderId = "101";
       callback(orderId);
   }, 2000);
}

var printOrderID = function (orderId) {
   console.log("Order ID = " + orderId);
}

placeOrder(printOrderID());
