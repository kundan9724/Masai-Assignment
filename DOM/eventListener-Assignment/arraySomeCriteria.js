var arr = [2, 4, 5, 3, 6, 8];

function oddIndex(el, i)
{
    return i % 2 != 0;
}

function oddNumbers(el)
{
    return el % 2 != 0;
}
console.log(arr.filter(oddIndex).filter(oddNumbers))