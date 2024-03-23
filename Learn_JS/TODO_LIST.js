let todoList = [{ item: item }, { dueDate: date }];
dispalyList();
function ADDItem() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = inputElement.value;
    todoList.push({ item: todoItem }, { dueDate: todoDate });
    inputElement.value = "";
    dateElement.value = "";
    dispalyList();
}
function dispalyList() {
    let containerElement = document.querySelector(".todo-container");
    let newHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHTML +=
            `<div>
                <span>${item}</span >
                <span>${dueDate}</span>
                <button onclick="todoList.splice(${i}, 1); dispalyList();">Delete</button>
            </div > `;
    }
    containerElement.innerHTML = newHTML;
}