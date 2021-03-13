function log(text) {
    return text;
}

var _city =  "Ayodhya";
var x  = true;
var y = false;
var z = x && y;
console.log(log(_city));
console.log('2+1',z || x);
console.log('5>3');
var stringOne = "upGrad";
var stringTwo = "Education";

console.log(stringOne + stringTwo);// Print stringOne followed by stringTwo
console.log((stringOne + stringTwo).length)//

var x = 4 + "Hello";
console.log(x);

console.log(2*3 + "upgrad" + 2 + 3 + "upgrad" + 2 + (3-2));

var a = '20';

var b = 'x';

console.log(a-b, a + b, a * b, a / b);

var x = parseInt("10.3abc");
console.log(x);var x = parseInt("10.3a");
console.log(typeof(x));
var z='5';
console.log(typeof('5'), typeof(''));
var hometown = null;
var doYouStay;
console.log(hometown);
console.log(doYouStay);
console.log(6 * 7 + 3);
var item = '23.5kg';
console.log(+(item));

var message = "The nearest city is";
var city = "Goa";

var displayText = message + " " + city;
console.log(displayText);

var x = 1 + 2 + ' Hello World ' + (3 + 4);
console.log(x);
console.log('false' == false);

var x =5;

if (x % 2 == 0) {
    console.log('Even number');
} else {
    console.log ('Odd number');
}
var x = 300;
if(x > 300 || x < 400) {
    console.log("I am in the if-block!");
 } else {
    console.log("I am in the else-block!");
 }

 var password = 'Gupta1';// Initialize the variable named password with a password of your choice

if(password.length >= 6) {console.log('Correct password!');}// If the password is greater than or equal to 6 characters in length, print 'Correct password!'

else {console.log('Password too short!');}// If the password is less than 6 characters in length, print 'Password too short!'

var x = 0;
var y = '0';
var z = '2 - 2';
if( x === y ) {
   console.log("Pizza");
} else if( x  ===  z ) {
   console.log(" Pizza's Over");
} else if( x == y ) {
   console.log('More Pizza’s Coming');         
} else {
   console.log('Party’s Over; Go home');
}

var level = 18;// Declare & initialize a variable named level that stores the level of haemoglobin in human body

if (level <14) {console.log('Low');}// Print Low if the level is less than 14

else if(level >= 14 && level < 17) {console.log('Normol');}// Print Normal if the level is between 14 and 17 (both inclusive)

else {console.log('High');}// Print High if the level is greater than 17

level <14 ? console.log('Low') : console.log('Normal'); 
var city = "New Delhi";
city === 'New Delhi' ?    console.log('Capital of India') : console.log('Not a capital of India');

var num1 = 14;
var num2 = 12;
var num3 = 6;

if (num1<num2) {
      if (num1 < num3) {
            console.log(num1);
     }
     else if (num3<num2){
         console.log(num3);
     }
     else {
         console.log(num2);
     }
}
else {
    if (num2<num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}