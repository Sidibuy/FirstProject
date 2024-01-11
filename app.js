//ToDo list/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//Expense Tracker/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var inputName = document.getElementById("inputName");
var inputDate = document.getElementById("inputDate");
var inputAmount = document.getElementById("inputAmount");
var addExpense = document.getElementById("addExpense");
var caution = document.getElementById("caution");
var table = document.getElementById("expenseTable");
var removeBtn = document.getElementById("removeBtn");
//test
var hello = document.getElementById("hello");

addExpense?.addEventListener("click", function () {
  if (
    inputName.value !== "" &&
    inputDate.value !== "" &&
    inputAmount.value !== ""
    // inputAmount.value === 0
  ) {
    caution.style.display = "none";
    var name = inputName.value;
    var date = inputDate.value;
    var amount = inputAmount.value;
    // var formattedAmount = inputAmount.toLocaleString("en-US").value;

    table.innerHTML += `
    <tr class="bg-sky-200">
      <td class="border-solid border-2 border-blue-600" style="text-transform: capitalize">${name}</td>
      <td class="border-solid border-2 border-blue-600">${date}</td>
      <td class="border-solid border-2 border-blue-600">₱${amount}</td>
      <td class="border-solid border-2 border-blue-600 text-center">
        <button 
          id="removeBtn"
          class="fa-solid fa-trash-can bg-red-500 px-1 py-2 rounded"
          onclick="deleteItem(this)"></button>
      </td>
    </tr>`;
    inputName.value = "";
    inputDate.value = "";
    inputAmount.value = "";
  } else {
    alert("name, date, and amount filled");
  }
});

function deleteItem(e) {
  let text = "Are you sure you want to delete this item?";
  if (confirm(text) == true) {
    e.parentElement.parentElement.remove();
  } else {
    return;
  }
}

//Note Taker/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const noteTitleInput = document.getElementById("noteTitleInput");
const noteInput = document.getElementById("noteInput");
const form = document.getElementById("form");
const notes = document.getElementById("notes");

// Add click event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  var title = noteTitleInput.value;
  var noteContent = noteInput.value;

  // Create a new note container
  const noteContainer = document.createElement("div");
  noteContainer.classList.add(
    "text-left",
    "space-y-3",
    "p-2",
    "m-2",
    "border-2",
    "border-black",
    "rounded-md"
  );

  // Create title paragraph
  const titleParagraph = document.createElement("p");
  titleParagraph.classList.add("font-bold", "capitalize");
  titleParagraph.textContent = title;

  // Create note paragraph
  const noteParagraph = document.createElement("p");
  noteParagraph.classList.add("pl-5");
  noteParagraph.textContent = noteContent;

  // Create view detail button
  const viewDetailBtn = document.createElement("button");
  viewDetailBtn.classList.add(
    "p-2",
    "rounded-md",
    "bg-blue-600",
    "hover:bg-[#0C3EED]",
    "font-medium",
    "text-white",
    "hover:cursor-pointer"
  );
  viewDetailBtn.textContent = "View Detail";

  // Add click event listener to the view detail button
  viewDetailBtn.addEventListener("click", () => {
    // Create modal overlay
    const overlay = document.createElement("div");
    overlay.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-black",
      "bg-opacity-50",
      "flex",
      "justify-center",
      "items-center"
    );

    // Create modal content
    const modal = document.createElement("div");
    modal.classList.add(
      "bg-white",
      "p-6",
      "rounded-md",
      "shadow-lg",
      "text-center"
    );
    modal.textContent = noteContent;

    // Append modal content to overlay
    overlay.appendChild(modal);

    // Append overlay to the body
    document.body.appendChild(overlay);

    // Close the modal when clicking outside of it
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        document.body.removeChild(overlay);
      }
    });
  });

  // Append title, note, and view detail button to the note container
  noteContainer.appendChild(titleParagraph);
  noteContainer.appendChild(noteParagraph);
  noteContainer.appendChild(viewDetailBtn);

  // Append the note container to the notes container
  notes.appendChild(noteContainer);

  // Clear input fields
  noteTitleInput.value = "";
  noteInput.value = "";
});
