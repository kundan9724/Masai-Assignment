// var promise = new Promise(executor);

// function executor(resolve, reject)
// {
//     setTimeout(function ()
//     {
//         resolve("resolved")
//     },1000)
// }
// promise.then(function (response)
// {
//     console.log(response)
//     console.log(promise);
// })
// console.log(promise);




// function sleep(delay)
// {
//     return new Promise(function (resolve, reject)
//     {
//         if (typeof delay !== "number")
//             reject("Please pass a number to the sleep function")
//         setTimeout(function(){
//             resolve("Success")
//         }, delay);
            
//       })
// }
// sleep("300b")
//     .then(function ()
//     {
//         console.log("Slept");
//     }).catch(err => {
//     console.log(err)
//     }).then(() => {
//     console.log("Your Request is rejected")
//     })

    //Using callbacks in place of promise can increase complexity

// setTimeout(() => {
//     a(b);
// }, 3000)
    
// function a(callback)
// {
//     return setTimeout(() => {
//         console.log('a');
//         return callback(100);
//     },1000)
// }

// function b(value)
// {
//     console.log("value is", value);
// }


console.log(1)

console.log(5);

setTimeout(() => {
    console.log(3)
}, 0);

setTimeout(() => {
    console.log(4);
}, 1000);


Promise.resolve(2).then(function (value)
{
    console.log(value);
})

//output 1 5 2 3 4
//JS make a priority queue for promise ,if setTime out and promise have same delay promise come to the stack first and executed...