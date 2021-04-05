let firstName = "Srishti";
console.log(firstName);
firstName = "Prateek";

const lastName = "Gupta";
//lastName = "Grover";
console.log(lastName);

/**
 * Function to calculate amount for the item pen
 * @param {*} quantity number of pens to be purchased
 */
 let amount, quantity;
 function calculateAmount(quantity) {
    /* TODO 1: Write all your code inside this function
    The price is always fixed to Rs. 10.
    Assume the quantity to be 5.
    */
    const price = 10;
    return quantity * price;
    // TODO 2: Return the amount to be paid by the customer
}

/**
 * Function to show the amount payable on the console
 * @param {*} amount total amount to be paid
 */
function showAmount(amount) {
   console.log("Total amount to be paid = Rs. ",amount); // TODO 3: Log the given message to the console here
}
quantity = 10;  
amount = calculateAmount(quantity);/* TODO 4: Call the function calculateAmount() while passing the quantity of pens as an argument
and
Call the function showAmount() while passing the result (amount) of the function calculateAmount() as its argument
*/
showAmount(amount);

let arr = [1, 2, 3, 4, 5], numberToFind = 4;

// finding index of the given numberToFind in the given array arr
for (var index = 1; index <= 10; index++) {
   if (arr[index] === numberToFind) {
       break;
   }
}
console.log("The number is found at index " + index);

class Animal {
    constructor() {
        this.moves = true;
    }

}

let a = new Animal();

console.log(a);

class rabit extends Animal {
    constructor() {
        super();
        this.run = function () {
            let point = 0, direction = 'left';
            return point + " " + direction;
        };
    }
}

let r1 = new rabit();
r1.lastname = "Test";
console.log(r1.run());

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    setlastname(lastname) {
        this.lastName = lastname;
    }

    getFullname() {
        return this.name + " " + this.lastName;
    }

 }
 
 class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    getid() {
        return this.id;
    }
 }
 
 let p = new Person('Sudhi');
 let e = new Employee("Sudheendra",'E000001');
 //console.log(p);
 //p.setlastname('hegde');
 //console.log(p.getFullname());
 console.log(e);    
 console.log(e.name + " " + e.getid())