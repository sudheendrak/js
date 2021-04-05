setTimeout(() => {
    const userDetails = ["Sachin", "Ramesh", "Tendulkar"];
const [lastName, , firstName] = userDetails;
console.log(e.get(),firstName, lastName);
}, 3000);
 

function login(loggedIn) {
    message = "Please login!";
    console.log(message);
    if (loggedIn) {
        let name = "Srishti";
        
        var message = "Welcome " + name + "!";
        console.log(message);
    }
 }
 
 login(true);

 class Person {
    constructor(name) {
        this.name = name;
        console.log("I am a person.");
    }
 }
 
 class Employee extends Person {
    constructor(name) {
        super(name);
        console.log("I am an employee.");
    }
    get() {
        return this.name;
    }
 }
 
 let p = new Person('Sudhi');
 let e = new Employee('Sono');

