const register = (cb) => {
    // waitForFiveScond();
    setTimeout(() => {
        console.log("register end")
    },5000);
    console.log("Register end")
    cb();
}
const login = () => {
    setTimeout(() => {
        console.log("Login end")
    },5000);
    console.log("login end")
    cb();
}
const displayData = () => {
    // waitForFiveScond();
    setTimeout(() => {
        console.log("display end")
    },5000);
    console.log("Display user data")
}
// const waitForFiveScond = () => {
//     const ms = 5000 + new Date().getTime();
//     while(ms>new Date()){
//         console.log(ms)
//     }
// }


// This is callback hell
register(() => {
    login(() => {
        displayData();
    });
});
