var book1 = {title : "Test1", author: "authname1", publisher: "ankita", "is-Avail": true};

//syntax - dot notation
//objectname.key
console.log(book1.title);

//syntax - Bracket notation
//objectname["key"]

console.log(book1['title']);

var music = {
    rock: 'guiter',
    classical: 'violin'
}

var classical = 'rock';

var sound = music[classical];

console.log(sound);

var soundobj = music.classical;

console.log(soundobj);

var person = {
    id: 101,
    email: 'alice11@gmail.com',
    personalInfo: {
        name: 'Alice',
        address: {
            locality: 'Smith Avenue',
        }
    }
}

console.log(person["personalInfo"]["name"]);
console.log(person["personalInfo"].name);
console.log(person.personalInfo.name);
console.log(person.personalInfo["name"]);

for (key in person) {
    console.log(key + " " + person[key]);
}

var itemsToBuy = {
    milk: {
        quantity : 5,
        price: 20
    },
    bread: {
        quantity : 2,
        price: 15
    },
    potato: {
        quantity : 3,
        price: 10
    }
}

var items = [];
var prices = [];
var i=0;
for(var key in itemsToBuy) {
    items[i] = key;
    prices[i] = itemsToBuy[key].price;
    i++;
}

console.log(items);
console.log(prices);

itemsToBuy.mango = {
    quantity: 5,
    price: 10
}

console.log(itemsToBuy);