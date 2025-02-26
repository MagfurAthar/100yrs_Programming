
// Constructor doesn'n retunr anything and start with capital letter.
function PersonCreator(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}



// Constructor is a function that is used to create an object. It is a special type of function that is used to initialize the properties of an object.

PersonCreator.prototype.talk = function () {
    console.log("Hello, my name is " + this.name);
};

let person1 = new PersonCreator("John", 23);
let person2 = new PersonCreator("sameer", 22);
// new operator is used to create a new instance of an object. It is used to call the constructor function and create a new object.

person1.talk();
person2.talk();
console.log(person1.talk() === person2.talk()); // True because they are different objects, but using the same prototype of the Constructor - PersonCreator.
