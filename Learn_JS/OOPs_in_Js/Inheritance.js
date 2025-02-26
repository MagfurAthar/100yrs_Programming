// Inheritance = When a class inherits from another class, it is known as inheritance.


class Relation {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    talk() {
        return "Hi, I am " + this.fname + " " + this.lname + " and I am " + this.age + " years old.";
    }
    getAge() {
        return this.age;
    }
}

class Father extends Relation {
    constructor(fname, lname, age, business) {
        // this.fname = fname;
        // this.lname = lname;
        // this.age = age;
        console.log("Father class constructor called");
        super(fname, lname, age); //Relation class constructor is being called
        this.business = business;
    }
    // talk() {
    // return "Hi, I am " + this.fname + " " + this.lname + " and I am the father.";
    // }
}


let F1 = new Father("Rahul", "Sharma", 45);
// let F2 = new Father("Raj", "Sharma", 50);
console.log(F1.talk());


console.log("-------------------------------------------------");
class Child extends Relation {
    constructor(fname, lname, age, work) {
        // this.fname = fname;
        // this.lname = lname;
        // this.age = age;
        console.log("Child class constructor called");
        super(fname, lname, age); //Relation class constructor is being called
        this.work = work;
    }
    // talk() {
    // return "Hi, I am " + this.fname + " " + this.lname + " and I am the child.";
    // }

}

let C1 = new Child("Vinay", "Sharma", 18);
console.log(C1.talk());