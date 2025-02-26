
// Classes in JS :---------------------

class Car {
    constructor(name, model, yaer) {
        this.name = name;
        this.model = model;
        this.yaer = yaer;
    }
    getName() {
        return this.name;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.yaer;
    }
    run() {
        console.log(this.name + " " + "Car is running");
    }
    stop() {
        console.log(`Stop the ${this.name} car.`);
    }
}

let car1 = new Car("BMW", "X5", 2020);
console.log(car1);
car1.run();
car1.stop();

let car2 = new Car("Audi", "A8", 2021);
console.log(car2);
car2.run();
car2.stop();

