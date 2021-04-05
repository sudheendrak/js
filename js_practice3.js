var yearArr;
yearArr = [2000,2001,2002,2003,2004];
console.log(yearArr);
//yearArr.forEach(element => {
  //  console.log(element);
//});
for (i=0;i<yearArr.length;i++){
    console.log(yearArr[i]);
}

var itemsArr = ["Milk", "Bread", "Potato"];
var quantityArr = [5,2,3];
for(i=0;i<itemsArr.length;i++) {
    console.log(itemsArr[i] + " - " + quantityArr[i]);
}

itemsArr.push("Apple");
console.log(itemsArr);
itemsArr.pop();
console.log(itemsArr);
itemsArr.unshift("Mango");
console.log(itemsArr);
itemsArr.shift();
console.log(itemsArr);

var carNames = ["Honda", "Ferrari", "Porche", "Fiat"];

carNames.pop();

carNames.push("Mazda");

carNames.shift();

carNames.unshift("Ford");

var developer = ["Sudheendra", "bengaluru", 38, true];