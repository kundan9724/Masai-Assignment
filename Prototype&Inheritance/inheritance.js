//Create a constructor function name grandParent with all the properties of my Grand Parent

function grandParent()
{
    this.name = "Ram Jeevan Chaudhary";
    this.age = "age";
    this.color = "wheatish";
    this.hair = "curly";
}
grandParent.prototype.color = "wheatish";

var parent = new grandParent(); //create a new object name parent
parent.name = "Uma Shankar Chaudhary";
parent.age = 47;
console.log(parent.age);//47


var son = Object.create(grandParent.prototype);
//son doesn't have access to this.color as new grandParent execute the constructor code whereas object.create can't execute the constructor code
console.log(son.color);//wheatish
console.log(Object.getPrototypeOf(parent))


