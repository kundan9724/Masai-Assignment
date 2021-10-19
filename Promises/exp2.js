console.log(1);

var output = new Promise(function (resolve, reject) //Promise(executor) executor is  synchronous so execute first  
{
    console.log(2);
    setTimeout(() => {
        resolve(3);
    },0)
})

output.then(function (value)
{
    console.log(value);
})
console.log(4);