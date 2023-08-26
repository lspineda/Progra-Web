const table = document.querySelector("table");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const textInput = document.getElementById("textInput");
const items = [];

addButton.addEventListener("click", () => {
    const text = textInput.value;
    if (text) {
        items.push(text);
        updateTable();
        textInput.value = "";
    }
});

removeButton.addEventListener("click", () => {
    if (items.length > 0) {
        items.pop();
        updateTable();
    }
});

function updateTable() {
    table.innerHTML = "<tr><th>Elementos</th></tr>";
    items.forEach(item => {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = item;
        row.appendChild(cell);
        table.appendChild(row);
    });
}