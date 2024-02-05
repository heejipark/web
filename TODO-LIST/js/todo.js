const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const ul = document.getElementById("todo-list");

let allToDos = [];
TODOS_KEY = "allToDo";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(allToDos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  allToDos = allToDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

function addToDoList(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  allToDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", addToDoList);

const recallToDos = localStorage.getItem(TODOS_KEY);
if (recallToDos !== null) {
  const parsedToDos = JSON.parse(recallToDos);
  allToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
