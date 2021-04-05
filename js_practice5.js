function test(param1){
    console.log(param1);
}

test("test");
var x =3;
function f() {
    return x * x;
};

var x = function(){
    return 4*4;
}

var book = {
    title: "tit1",
    author: "auth1",
    greet: function(){
        console.log("Awesome!" + this.title);
    }
}
console.log(book.greet());

var author = {
    name: "Alan Moore",
    books: function() {
        console.log("Alan Moore is famous for his illustrated novels.");
    }
}
author.books();

var match = {
    team1: "Manchester City",
    team2: "Liverpool",
    winner: function() {
        alert("Manchester City beats Liverpool by 5-0");
    }
}

//match.winner();

var x =35;
if (x > 34) 
   console.log('Greater than 34');
else
   console.log('Less than or equal to 34');

   var n = 2;
for (var i = n; i < 12; i = i + n) {
  console.log(i);
}

console.clear();

var x = 123;
//var x = "Alice in Wonderland"
console.log(x);

x > 10 ? console.log("Testing") :
console.log("test2");
console.log("test3");

function pos() {
    var num = prompt("Enter a number: ");
    num = parseInt(num);
    if(num < 0) {
        console.log("Negative number");
    } else if (num === 0) {
        console.log("NUmber is zero");
    } else if (num > 0 && num <10){
        console.log("Single digit Positive number");
    } else {
        console.log("Double digit positive number");
    }
}


function swap(x, y) {
    x.key = x.key + y.key;
    y.key = x.key - y.key;
    x.key = x.key - y.key;
}
var a, b = null;

//console.log(a.__proto__);
console.log(b.__proto__);