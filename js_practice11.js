sum = (...arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
let data = [19,2,14,6,8,12];

let data1 = [2,4,6];

console.log([...data, ...data1]);

data1[0] = 21;

console.log(data1)

obj = {a:2,b:1};

obj1 = {...obj};

/* TODO: Define a function with identifier calculateSumAfterTax
This function calculates the sum of all the prices after applying given tax on each price. 
*/
function calculateSumAfterTax(tax,...args) {
    let sum = 0;
    args.forEach( element => {
        sum+= element + (tax * element/100);
    })
    return sum;
}
// Printing the sum of all the prices - 10, 20, and 30 after tax of 10% (first argument) is applied on each of the prices (subsequent parameters)
console.log(calculateSumAfterTax(10, 10, 20, 30));

const firstName = "Srishti", lastName = "Gupta", role = "developer", type = "JavaScript";

console.log(`My name is ${firstName} ${lastName}. I am a ${type} ${role}.`);//back tic not stright tic

/**
 * Function to greet the user with his/her first name and last name
 * @param {*} person 
 */
 const greetUser = (person) => {
    // TODO: Use spread operator to get the values of the keys - firstName and lastName with alias names fn and ln respectively
     const {firstName:fn, lastName:ln} = person;
     console.log(`Hi ${fn} ${ln}!`);
     console.log("Hello " + fn + " " + ln + "!");
    // WARNING: DO NOT EDIT THE LINE GIVEN BELOW
    // console.log("Hello " + fn + " " + ln + "!");
}

// object for a person
const person = {
    firstName: "Srishti",
    lastName: "Gupta",
    nationality: "Indian",
    gender: "Female"
};

greetUser(person);