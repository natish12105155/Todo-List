let todoList = [
    
];

function addTodo() {
    let todoElement = document.querySelector('#todo-input');
    let todoItem = todoElement.value;
    let dateElement = document.querySelector('#todo-date');
    let todoDate = dateElement.value;

 
    if (todoItem === '' || todoDate === '') {
        alert('Please enter both a todo and a date!');
        return;
    }

    todoElement.value = '';
    dateElement.value = '';
    todoList.push({ name: todoItem, date: todoDate });
}

function display() {
    let divElement = document.querySelector('.grid-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let { name, date } = todoList[i];
        newHtml += `<div class="todo-item">`;
        newHtml += `<span>${name}</span>`;
        newHtml += `<span>${date}</span>`;
        newHtml += `<button class="del-button" onclick="deleteTodo(${i})">Delete</button>`;
        newHtml += `</div>`;
    }
    divElement.innerHTML = newHtml;
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    display();
}
