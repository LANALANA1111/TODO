let inputBox = document.getElementById("input-box");
const todolist = document.querySelector("todolist");
const listContainer = document.getElementById("list-container");
const todoCount = document.getElementById("span");

function enterClick(event) {
  let array = []
  if (event.key === "Enter") {
    if (inputBox.value === "") {
      alert("enter something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  }
  const main = document.querySelector("main");
  todoCount.textContent = main.length;
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();



