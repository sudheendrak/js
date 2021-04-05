const done = () => {
    console.log('Finished!');
}

const getCity = (state) => {
    return new Promise((resolve,reject) => {
        console.log('Getting Cities...');
        setTimeout(() => {
            let city = "Bengaluru";
            console.log(city);
            resolve();
        }, 2000);
    });
};

const getState = (country) => {
    return new Promise((resolve, reject)=> {
        console.log("Getting State");
        setTimeout(() => {
            let state = "Karnataka";
            console.log(state);
            resolve();
        }, 2000);
    });
};

const getCountry = (continent) => {
    return new Promise((resolve,reject)=>{
        console.log("Getting Country");
        setTimeout(() => {
            let country = "Bharat";
            console.log(country);
            resolve();
        }, 2000);
    });
};

const getContinents = new Promise((resolve,reject)=>{
    console.log("Getting Continant");
    setTimeout(() => {
        let continent = "Asia";
        console.log(continent);
        resolve();
    }, 2000);
});

const getAddress = () => {
    getContinents.then((continent)=>{
        return getCountry(continent);
    },err =>{
        console.log(new Error(error));
    }).then(country =>{
        return getState(country);
    }, error => {
        console.log(new Error(error));
    }).then(state =>{
        return getCity(state);
    },error=>{
        console.log(new Error(error));
    }).then(city=>{
        done();
    }, error =>{
        console.log(new Error(error));
    });
}

getAddress();