let arr = [-19,-12,4];
let results = [];
let count = 0;

function subset(curr,arr,start)
{
    results.push(curr);
    console.log(results)
    if (oddsubset(curr))
        count++;

    for (let i = start; i < arr.length; i++)
    {
        subset(curr.concat(arr[i]), arr, i + 1);
    }
    return count;
}
function oddsubset(results)
{
    results = results.split("").map(Number);
    // console.log(results)
    let sum1 = 0;
    for (let j = 0; j < results.length; j++)
    {
        sum1 += results[j];

    }
    // console.log(sum1);
    if (sum1 % 2 != 0)
        return true;
}
console.log(subset("",arr,0))