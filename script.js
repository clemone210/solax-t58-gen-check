var results = [];

function checkSerialNumber() {
    var serialNumber = document.getElementById("serial-number").value.toUpperCase().replace(/ /g, "");
    var machineCategory = serialNumber.substring(4, 5);
    var description = "";
    switch (machineCategory) {
        case "A":
            description = "T58 Master V1";
            break;
        case "B":
            description = "T58 Slave V1";
            break;
        case "E":
            description = "T58 Master V2";
            break;
        case "F":
            description = "T58 Slave V2";
            break;
        default:
            description = "Unknown machine category";
    }
    results.push({category: machineCategory, description: description});
    displayResults();
}

function displayResults() {
    var table = document.getElementById("results");
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    for (var i = 0; i < results.length; i++) {
        var tr = document.createElement("tr");
        var tdCategory = document.createElement("td");
        tdCategory.innerHTML = results[i].category;
        tr.appendChild(tdCategory);
        var tdDescription = document.createElement("td");
        tdDescription.innerHTML = results[i].description;
        tr.appendChild(tdDescription);
        table.appendChild(tr);
    }
}
document.getElementById("serial-number").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkSerialNumber();
    }
});