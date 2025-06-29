let arr = [];
let idx = 0;
document.getElementById("updateTodo").style.display = "none";
function addTodo() {
  const task = document.getElementById("taskInput").value;
  if (task == "") {
    alert("please enter a task");
    return;
  }

  arr.push(task);
  makeList(arr);
  document.getElementById("taskInput").value = "";
}
function searchFilter(){
    const searchTerm = document.getElementById("searchTask").value;
    if (searchTerm === "") {
          makeList(arr);
    }
    const todoList = document.getElementById("todoList");

    todoList.innerHTML = "";

    const filteredItems = arr.filter(item =>  item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    if (filteredItems.length === 0) {
        todoList.innerHTML = "<p>No items found</p>";
        return;
    }
    
  makeList(filteredItems);
}
function makeList(arr) {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  var ul = document.createElement("ul");
  let formHtml = "";
  arr.forEach((item, index) => {
    formHtml += `<li>${item}<br><button onclick=editTodo(${index})>edit</button> 
    <button onclick=deleteTodo(${index})>Delete</button></li>`;
  });
  ul.innerHTML = formHtml;
  todoList.appendChild(ul);
}

function editTodo(index) {
  document.getElementById("taskInput").value =  arr[index];
  document.getElementById("addTodo").style.display = "none";
  document.getElementById("updateTodo").style.display = "block";
  idx = index;
}

function deleteTodo(index) {
  arr.splice(index, 1);
  makeList(arr);
  if (arr.length === 0) {
    console.log("No items in the list");
  }
}

function searchTodo(){
    const searchTerm = document.getElementById("searchInput").value;
    if (searchTerm === "") {
        alert("Please enter a search term");
        return;
    }
    const todoList = document.getElementById("todoList");

    todoList.innerHTML = "";

    const filteredItems = arr.filter(item => item.includes(searchTerm));
    if (filteredItems.length === 0) {
        todoList.innerHTML = "<p>No items found</p>";
        return;
    }
}

function updateTodo() {
    const task = document.getElementById("taskInput").value;
    arr[idx] = task;
    makeList(arr);
    document.getElementById("taskInput").value = "";
  document.getElementById("addTodo").style.display = "block";
  document.getElementById("updateTodo").style.display = "none";

}

