function myArray3(n)
{
   
    Object.defineProperty( this,"length", {
        value: arguments.length,
        writable: true,
        enumerable:false

    })
    for (var i = 0; i < this.length; i++)
    {
        this[i] = arguments[i];
        }

}

var arr3 = new myArray3(1, 2, 3);

myArray3.prototype.push=function(p)
{
    var index = this.length;
    this[index] = p;
    this.length++;
}
arr3.push(4);

myArray3.prototype.pop = function ()
{
    var index = this.length-1;
    delete this[index];
    this.length--;
}
arr3.pop()

myArray3.prototype.reverse = function ()
{
    var index = this.length - 1;
   
    for (var i = 0; i <= index/2; i++)
    {
        var temp = this[i];
        this[i] = this[index - i];
        this[index - i] = temp;
        }

}
arr3.reverse()


var orgArr = Object.values(arr3);
console.log(orgArr[0]);