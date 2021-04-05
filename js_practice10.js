let a = [6,8,10,12,14];

let b = a.map(function(item){
    return item*0.9;
});

console.log(b);

const d = [10, 20, 30];

let c = d.filter(function(item){
    return item > 15;
})

console.log(c);

for (key in d) {
    if(d[key] >= 15)
        console.log(d[key]);
}

var input = [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300]

var output = input.filter(function(item){
    if(item % 10 === 0) 
    return item;
})

console.log(output)

var input = [234, 567, 273, 456, 598, 635, 644, 718, 750, 753, 801];

var output = input.reduce(function(x , y){
    return x + y;
})

console.log(output);