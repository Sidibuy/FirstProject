var addTodo = document.getElementById("addTodo");
var inputField = document.getElementById("inputField");
var todoContainer = document.getElementById("todoContainer");

addTodo?.addEventListener("click", function () {
  if (inputField.value !== "") {
    var paragraph = document.createElement("div");
    paragraph.classList.add(
      "bg-slate-500",
      "md:w-1/4",
      "min-w-px200",
      "text-white",
      "rounded",
      "flex",
      "flex-wrap",
      "my-1"
    );
    paragraph.innerHTML = `<li class="flex flex-1 p-2">${inputField.value}</li> 
  <button class="fa-solid fa-trash-can bg-red-500 px-2 py-3 rounded m-1"></button>`;
    todoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", function () {
      todoContainer.removeChild(paragraph);
    });
  } else {
    alert("Please input new task!");
  }
});
