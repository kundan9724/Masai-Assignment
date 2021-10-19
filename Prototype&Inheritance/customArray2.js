function myArray2(n)
{
    
    for (let i = 0; i < arguments.length; i++)
    {
        this[i] = arguments[i];
        }
}
var arr2 = new myArray2(45, 76, 12, 23);
console.log("arr:", arr2);