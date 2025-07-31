//assigning HTML elements to variables and using querySelector to select elements by their IDs
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
  document.addEventListener("DOMContentLoaded", loadApp);
}

// Function to add a new todo item
function addToDo(e) {
  
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    console.log("Boş değer girilemez...");
  } else {
    createToDoListItem(newTodo);
    addToDoLocalStorage(newTodo);
  }
  e.preventDefault();
}

// Function to create a new todo list item and append it to the list
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
  todoInput.value = ""; 
  todoInput.focus(); 
}

// Function to get todos from localStorage
function getTodosFromLocalStorage() {
  let todos=localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  return todos;
}

// Function to add a todo to localStorage
function addToDoLocalStorage(todo) {
  let todos = getTodosFromLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  //console.log(todos);
  //console.log(typeof todos);
}

// Function to load the app and display existing todos
function loadApp() {
    let todos = getTodosFromLocalStorage();

    //console.log(todos);
    todos.forEach((todo)=>{
        createToDoListItem(todo);
    });
}