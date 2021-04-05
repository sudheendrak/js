let name;

let getName = (callback) => {
    //get name from db
    setTimeout(() => {
        name = "Sudheendra";
        callback();
    }, 2000);
    
}

let greet = () => {
        console.log(`Hello ${name}`);
}

getName(greet);


let getName1 = (callback) => {
    //get name from db
    setTimeout(() => {
        name = "Sudheendra";
        callback(name);
    }, 2000);
    
}

let greet1 = (nmval) => {
        console.log(`Hello ${nmval}`);
}

getName1(greet1);

// TODO 1: Write a function to create an order ID in the DB. You can mock this functionality by using a setTimeout() method which, after 2 seconds, assigns a value 101 to the order ID.
let getOrderId = (callback) => {
    //get orderId from db
    let orderId;
    setTimeout(() => {
        orderId = "101";
        callback(orderId);
    }, 2000);
}
// TODO 2: Write a callback function which prints the order ID to the console in this format: Order placed successfully with order ID = 101.
let printOrderId = (orderId) => {
    console.log(`Order placed successfully with order ID = ${orderId}.`);
}
// TODO 3: Invoke first function while passing in the callback function.
getOrderId(printOrderId);

const getAddress = () => {
    getContinenants(continant => {
        getCountries(continant, country => {
            getStates(country, state => {
                getCities(state, city => {
                    getArea(city, () =>{
                        done();
                    });
                });
            });
        });
    });
};

const getContinenants = (callback) => {
    setTimeout(() => {
        let continant = "Asia";
        console.log(continant);
        callback(continant)
    }, 1000);
}

const getCountries = (continant, callback) => {
    setTimeout(() => {
        let country = "Bharat";
        console.log(country);
        callback(country);
    }, 1000);
}
const getStates = (country, callback) => {
    setTimeout(() => {
        let state = "Karnataka";
        callback(state);
    }, 1000);
}
const getCities = (state, callback) => {
    setTimeout(() => {
        let city = "Bengaluru";
        console.log(city);
        callback(city);
    }, 1000);
}
const getArea = (city, callback) => {
    setTimeout(() => {
        let area = "Shrinivasa Nagar";
        console.log(area);
        callback();
    }, 1000);
}

const done = () => {
    console.log("Done");
}

getAddress();