document.addEventListener("DOMContentLoaded", () => {
  // your code here
  start();
});

function start() {
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', processRequest);
}

function processRequest(event) {
  event.preventDefault();
  const task = document.getElementById("new-task-description");
  addToList(task.value);
  task.value = "";
}

function addToList(task) {
  const list = document.getElementById('tasks');
  const item = document.createElement('li');
  item.innerHTML = task;
  list.appendChild(item);
  item.appendChild(spawnDeleteButton());
  document.getElementById("tasks").appendChild(item);
}

function deleteItem() {
  document.getElementById("tasks").removeChild(this.parentElement)
}

function spawnDeleteButton() {
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", deleteItem);
  return deleteButton;
}
