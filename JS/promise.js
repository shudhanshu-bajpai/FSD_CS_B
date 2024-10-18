// It contain 3 States
// 1. Resolve , 2. Reject , 3. pending
// It is used for Async Programming
// It contain 2 parameter after making object calling

// It contain 2 Methods -:
    // 1. ->  .then --> if promise run succesfully
    // 2. ->  .catch --> if promise give an error
const myPromise = new Promise((resolve,reject) => {
    console.log("executed Promises");
    // resolve("Success");
    reject("Network Error");
})
myPromise.then((msg) => {
    console.log(msg);
}).catch((error) => console.log("Error :",error))