function foo() {
    x = 34;
    bar();
   
 }
 
 function bar() {
    console.log(x);
    x = 75;
 }
 
 //foo();
 
/* TODO 1: Declare a variable with identifier itemsInCart in your code and initialize it with 0. 
Figure out the proper place where this variable needs to be declared.
*/
var itemsInCart = 0;
/* TODO 2: Defined a function with identifier addItem, which does the following:
a) Increments the number of items in the cart
b) Prints a message "Item added to cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
function addItem() {
    itemsInCart++;
    console.log("Item added to cart!");
    console.log("Item(s) in cart = " + itemsInCart);
}
/* TODO 3: Defined a function with identifier removeItem, which does the following:
a) Decrements the number of items in the cart
b) Prints a message "Item removed from cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
function removeItem() {
    if(itemsInCart === 0) {console.log("Your Cart Is Empty\ncan't remove Item.");}
    else {itemsInCart--;
        console.log("Item removed from cart!");
        console.log("Item(s) in cart = " + itemsInCart);
    }
}
// WARNING: DO NOT EDIT THE CODE GIVEN BELOW
console.log("Initially: Item(s) in cart = " + itemsInCart);
addItem();
addItem();
removeItem();

function greet(name) {
	var greeting = "Hi" + name;
	return function() {
		console.log(greeting);
	}
}

var sayHello = greet("Sudhi");

sayHello();

function createEmployeeID(num) { 
	var prefix = "employee"; 
	var generateID1 = function() { 
		for (var i = 0; i < num; i++) { 
			console.log(prefix + i); 
		} 
	} 
	return generateID1; 
} 
var print = createEmployeeID(3); 
print();


var generateID = function() {
    var prefix = "uid-";// TODO 1: Declare & initialize variable named prefix with value "uid-"
    var count = 0;// TODO 2: Declare & initialize variable named count with value 0
    return function() {
        count++;
        return prefix + count;
    }
    // TODO 3: return function which increments the count and returns the id formed with concatenating prefix and count
}

// calling the generateID() and then storing the returned function inside the variable named create
var create = generateID();
// calling the create function thrice
console.log(create());
console.log(create());
console.log(create());
 