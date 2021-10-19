let arr = ["apple", "windows", "ubuntu", "cola", "system"];
function pattern(x)
{
    return x[0] == 'a'||x[x.length-1]=='a';
}
let output = arr.filter(pattern);
console.log(output);