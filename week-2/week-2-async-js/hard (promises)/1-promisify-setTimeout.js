/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// const promise = new Promise((resolve, reject) => {
//     if (n) {
//         setTimeout(() => {
//             resolve();
//         }, n * 1000);
//     } else {
//         reject();
//     }
// })
// return promise;
function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    });
}
module.exports = wait;
