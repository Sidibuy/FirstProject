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
    var UnformattedInput = inputAmount.value;

    // Format the value as currency using Intl.NumberFormat
    const formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PHP", // You can change the currency code as needed
    }).format(Number(UnformattedInput));

    var amount = formattedValue;

    table.innerHTML += `
    <tr class="bg-sky-200">
      <td class="border-solid border-2 border-blue-600 px-1 py-2 my-1 text-transform: capitalize">${name}</td>
      <td class="border-solid border-2 border-blue-600 px-1 py-2 my-1">${date}</td>
      <td class="border-solid border-2 border-blue-600 px-1 py-2 my-1">${amount}</td>
      <td class="border-solid border-2 border-blue-600 text-center">
        <button 
          id="removeBtn"
          class="fa-solid fa-trash-can bg-red-500 px-1 py-2 my-1 rounded"
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
