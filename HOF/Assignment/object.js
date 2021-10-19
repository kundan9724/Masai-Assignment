let obj = {};
let arr = [1, 2, 2, 3, 2, 4, 3, 4];

for (let i = 0; i < arr.length; i++)
{
    if (obj[arr[i]] == undefined)
        obj[arr[i]] = 1;
    else
    {
        var prev = obj[arr[i]];
        obj[arr[i]] = prev + 1;
        }
}
for (key in obj)
{
    if (obj[key] == 3)
    {
        console.log(key);
        
        }
}