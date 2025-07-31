const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add");
const firstBody = document.querySelector("#first-body");
const secondBody = document.querySelector("#second-body");
const searchInput = document.querySelector("#search");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear");

loadEventListener();
function loadEventListener() {
  form.addEventListener("submit", addToDo);
}

function addToDo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    console.log("Boş değer girilemez...");
  } else {
    createToDoListItem(newTodo);

    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): [];
    return todos;
  }
  e.preventDefault();
}

function createToDoListItem(todo){
    const todoItem = document.createElement("li");
    todoItem.className = "list-group-item bg-dark text-light";
    todoItem.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  const spanElement = document.createElement("span");
  spanElement.appendChild(document.createTextNode(todo));
  todoItem.appendChild(spanElement);
  todoItem.innerHTML += `<i class="fa-solid fa-trash"></i>`;
  todoList.appendChild(todoItem);
}

