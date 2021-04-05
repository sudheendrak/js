var test_switch = "123";

switch(test_switch) {
    case "123": console.log("test");
    break;
    case "test2": console.log("test2");
    break;
    default: console.log("Default");
}
/*
 91 - India
 55 - Brazil
 81 - Japan
 30 - Greece
 47 - Norway 
*/
var mobile_no = '81-99999-99999';

switch(parseInt(mobile_no)) {
    case 91: console.log("India");
    break;
    case 55: console.log("Brazil");
    break;
    case 81: console.log("Japan");
    break;
    case 30: console.log("Greece");
    break;
    case 47: console.log("Norway");
    break;
    default: console.log("Other Country");
}

//var num = prompt("Input a Number ");
var num = 1234;
var sum = 0, n = parseInt(num);

while (n > 0){
    sum+=(n%10);
    n = Math.floor(n/10);
}

console.log("Sum of the Digits of " + num + " = " + sum);

var mult = 100;
var count = 1;
while (count <=100 ) {
    if(count % 7 == 0) {
        console.log(count); 
    }
    count+=1;
}
sum = 0; n = num;
for(i=0;i<=100;i++){
    sum+= n%10;
    n = Math.floor(n/10);
}

console.log("Sum of " + num + " = " + sum);

var x;

for (x = 1; x < 5; x = x + 2) {
  console.log(x + 1);
}

var num = 10;
var product = 1;
for (i=1;i<=num;i++) {
    product*= i;
}

console.log("Product of first 10 Natural numbers = " + product);

var num = 14;
for(i=1;i<14;i++){
    if(i%2 ===0 || i%3 === 0 || i%6 ===0) {
        console.log(i);
    }
}

var a =1, b=1, f;
for(i=3;i<=15;i++){
    f = a +b;
    a = b;
    b =f;
}
console.log("Fibonanci No. at pos " + (i-1), f)