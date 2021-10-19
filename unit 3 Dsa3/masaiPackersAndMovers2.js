let k = 3;
let n = 3;
let arr = [1, 2, 3];

let sum = 0;
function packers(k,arr,start)
{
    if (k == 0)
        return 1;
    
    for (let i = start; i < arr.length; i++)
    {
        sum += packers(k - arr[i], arr, i + 1);
        console.log(sum);
    }
    return sum;
        
}
console.log(packers(k, [1,2,3],0));