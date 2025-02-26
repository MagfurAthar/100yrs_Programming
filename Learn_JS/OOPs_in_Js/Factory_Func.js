// Factory Function in JavaScript
//This function creates a man object with a name, age, and three methods: walk, sleep, and talk
function ManCreator(name, age) {
    //Create a man object with the given name and age
    const man = {
        name: name,
        age: age,
        //This method logs a message to the console when called
        walk: function () {
            console.log(`${this.name} is walking`);
        },
        //This method logs a message to the console when called
        sleep: function () {
            console.log(`${this.name} is sleeping`);
        },
        //This method logs a message to the console when called
        talk() {
            console.log(`${this.name} is talking`);
        }
    };
    //Return the man object
    return man;
}

let man1 = ManCreator("John", 25); //disadvantages of Factory function is, individual copy is created for each object
man1.walk(); // John is walking
man1.sleep(); // John is sleeping
man1.talk(); // John is talking


console.log("-------------------------");

let man2 = ManCreator("Jane", 30);
man2.walk();    // Jane is walking
man2.sleep();   // Jane is sleeping
man2.talk();    // Jane is talking

console.log("-------------------------");
