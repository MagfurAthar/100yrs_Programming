let todo = [];
let req = prompt("Please enter your request..");
while (true) {
    if (req == 'quit') {
        console.log(`Quitting App!!`);
        break;
    }
    if (req == `list`) {
        console.log(`--------------------------`);
        for (list of todo) {
            console.log(list);
        }
        console.log(`--------------------------`);
    } else if (req == `add`) {
        let task = prompt(`Please enter the task you want to add`);
        todo.push(task);
        console.log(`Task added`);
    } else if (req == `delete`) {
        let idx = prompt(`Please enter the task index`);
        todo.splice(idx, 2);
    } else {
        console.log("Wrong task!!");
        alert("Please Enter the suitable task")
    }
    req = prompt("Please enter your request..");
}