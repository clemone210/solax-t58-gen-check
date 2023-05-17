let results = [];

const machineCategories = {
    "A": "T58 Master V1",
    "B": "T58 Slave V1",
    "E": "T58 Master V2",
    "F": "T58 Slave V2",
};

function checkSerialNumber() {
    const serialNumber = document.getElementById("serial-number").value.toUpperCase().replace(/ /g, "");
    const machineCategory = serialNumber.substring(4, 5);
    const description = machineCategories[machineCategory] || "Unknown machine category";
    
    results.push({ serialNumber, category: machineCategory, description });
    displayResults();
}

function displayResults() {
    const table = document.getElementById("results");
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    for (let result of results) {
        const { serialNumber, category, description } = result;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${serialNumber}</td>
            <td>${category}</td>
            <td>${description}</td>
        `;
        table.appendChild(tr);
    }
}

document.getElementById("serial-number").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkSerialNumber();
    }
});

document.querySelector('button').addEventListener('click', checkSerialNumber);