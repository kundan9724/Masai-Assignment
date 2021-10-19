let arr = [1,2,3,4,5,6];

function threeFactor(x)
{
    return x % 3 == 0;
}
function cubes(x) {
    return x ** 3;
}
let output = arr.filter(threeFactor).map(cubes).reduce(function sum(ac, el)
{
    return ac + el;
});

console.log(output);