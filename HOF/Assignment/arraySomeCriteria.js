let arr = [2, 4, 5, 3, 6, 8];


function evenIndex(el,i,arr)
{
    return i % 2 == 0;  
}
function evenNo(el){
    return el % 2 == 0;
}
console.log(arr.filter(evenIndex).filter(evenNo));