const arr=[1,2,3,4,5,6]  // create an array and assign value

function copy(arr)
{
    const arr1 = [...arr] //creates a shallow copy of arr,new way to copy array ,introduce in ES6
    arr1[0] = 7; // change in copy of arr;
    console.log(arr1);//console the copied array;
    console.log(arr);//console the value of original array
}
 
copy(arr); 