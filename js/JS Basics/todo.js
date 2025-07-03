let arr = [];
let idx = 0;

document.getElementById(
  "totalNumber"
).innerHTML = ` <p>Total :- ${arr.length}</p>`;
document.getElementById("updateTodo").style.display = "none";
let currentPage = 1;
let pageSize = 5;
let totalPages = Math.ceil(arr.length / pageSize);
const pagination = document.getElementById("pagination");
pagination.innerHTML = `${currentPage} of ${totalPages} pages`;
function addTodo() {
  const task = document.getElementById("taskInput").value;
  if (task == "") {
    alert("please enter a task");
    return;
  }

  arr.push({ checked: false, name: task });
  makeList(arr);
  document.getElementById("taskInput").value = "";
}
function searchFilter() {
  const searchTerm = document.getElementById("searchTask").value;
  if (searchTerm === "") {
    makeList(arr);
  }
  const todoList = document.getElementById("todoList");

  todoList.innerHTML = "";

  const filteredItems = arr.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  if (filteredItems.length === 0) {
    todoList.innerHTML = "<p>No items found</p>";
    return;
  }

  makeList(filteredItems);
}
//function paechange explains the logic to change the page
// it checks if the current page is less than the total number of pages
// and if the isNext parameter is true, it increments the current page
function pageChange(isNext) {
  if (currentPage < arr.length / pageSize && isNext) {
    currentPage++;
    makeList(arr);
  }
   if (currentPage > 1 && !isNext) {
    currentPage--;
    makeList(arr);
  }
}


function makeList(arr) {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  var ul = document.createElement("ul");
  let formHtml = "";
  let count = (currentPage - 1) * 5;
  arr.slice(count, pageSize + count).forEach((item, index) => {
    formHtml += `<li><input type="checkbox" id="myCheck${index}">${item.name}<br><button onclick=editTodo(${index})>edit</button> 
    <button onclick=deleteTodo(${index})>Delete</button></li>`;
  });
  ul.innerHTML = formHtml;
  todoList.appendChild(ul);
  document.getElementById(
    "totalNumber"
  ).innerHTML = ` <p>Total :- ${arr.length}</p>`;
  let totalPages = Math.ceil(arr.length / pageSize);
  pagination.innerHTML = `${currentPage} of ${totalPages} pages`;
}

function editTodo(index) {
  document.getElementById("taskInput").value = arr[index].name;
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

function updateTodo() {
  const task = document.getElementById("taskInput").value;
  arr[idx].name = task;
  makeList(arr);
  document.getElementById("taskInput").value = "";
  document.getElementById("addTodo").style.display = "block";
  document.getElementById("updateTodo").style.display = "none";
}

function checkAll() {
  const todoList = document.getElementById("todoList");
  const checkboxes = todoList.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}

function deleteAll() {
  //check the no. of items checked and delete them
  const todoList = document.getElementById("todoList");
  const checkboxes = todoList.querySelectorAll("input[type='checkbox']");
  let itemsToDelete = [];
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      itemsToDelete.push(index);
    }
  });
  if (itemsToDelete.length === 0) {
    alert("Please select at least one item to delete");
    return;
  }
  // reverse the array to delete from the end to avoid index shifting

  itemsToDelete.reverse().forEach((index) => {
    arr.splice(index, 1);
  });
  makeList(arr);
  if (arr.length === 0) {
    console.log("No items in the list");
    document.getElementById("todoList").innerHTML = "<p>No items found</p>";
  }
}

// setTimeout(() => {
//   arr = [];
//   makeList(arr);
// }, 1000);
