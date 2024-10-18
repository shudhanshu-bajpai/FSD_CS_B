// Every api is start from api.__ always

const url = "https://api.github.com/users/ShubhamChoudhary965";
const data = fetch(url);
data.then((data) => {
    return data.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Error :",error)
}).finally(() => console.log("finally executed"))


//          Synchronous                                             Asynchronous
//   1. it execute every program one by one                     1. it execute every program but if one program take more time the it execute another program
//   2. if you wnat to delay in this , So you can               2. In this we can async and await and this is not possibe without promises
//      compare real time and given time when you want to 
//     execute the program