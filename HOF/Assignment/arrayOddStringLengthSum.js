let arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
function oddString(x)
{
    return x.length % 2 != 0;
}
function lengthSum(x)
{
    return x.length;
}
let output = arr.filter(oddString).map(lengthSum).reduce(function totalSum(ac, el)
{
    return ac + el;
});

console.log(output);