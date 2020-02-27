// Exercise 2
// ----------



// 1. Write a function called `doublesLater` that returns a new Promise that doubles a num after 2 seconds.

const doublesLater = (num) => {
    return new Promise(function(resolve) {
        setTimeout(() => {num *= 2;resolve(num);}, 2000);
    });
}
// doublesLater(5);
doublesLater(5);
doublesLater(5).then(schmeckles => {console.log(schmeckles)});

// 2. Here is a promise called `addPromise` that adds 3 numbers, one after another and then resolves to the sum of a number and the doubles of 3 other numbers (10, 20, 30). As you can see, it is quite the hellish situation. _it is also a convoluted and totally fabricated situation..._

// ```js
// function addPromise(num){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10)
//             .then((a) => {
//                 doubleAfter2Seconds(20)
//                     .then((b) => {
//                         doubleAfter2Seconds(30).then((c) => {
//                             resolve(x + a + b + c);  // I think this x is supposed to be num
//                         })
//                 })
//         })
//     });
// }
// ```

// To get the result, we call the function and `then` console it...

// ```js
// addPromise(10).then((sum) => {
//     console.log(sum);
// });
// ```

// Rewrite this function to use `async`/`await`.


const addPromise = async (num) => {
    
    let a = await doublesLater(10);
    let b = await doublesLater(20);
    let c = await doublesLater(30);
    return num+a+b+c;
}

addPromise(10);
addPromise(10).then(schmeckles => {console.log(schmeckles)});
