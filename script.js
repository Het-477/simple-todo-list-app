/* Retrieve todo list from the storage or
*   initialize an empty array
*/
let todoList = JSON.parse(localStorage.getItem("todo_list")) || [];

const todoListInput = document.getElementById("todoInput");
const todoListItem = document.getElementById("todoListItem");
const todoItemCount = document.getElementById("todoCount");
const addButton = document.getElementById("add-todo-btn");
const deleteButton = document.getElementById("deleteButton");


// Initialize 
document.addEventListener("DOMContentLoaded", () => {
    addButton.addEventListener("click", addTask);
    todoListInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents default Enter key behavior
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteAllTasks);
    displayTasks();
});

function addTask() {
    const newTask = todoListInput.value.trim();
    if (newTask !== "") {
        todoList.push({
            text: newTask,
            disabled: false
        });
    }
}

function deleteAllTasks() {

}

function displayTasks() {

}

