// from data.js
var tableData = data;
var filterType = d3.select("#filter-type");
var filterTypeValue = d3.select("#filter-type-value");
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

console.log(tableData);
autoPopulate(tableData);

function autoPopulate(tableData) {

    // Use d3 to automatically populate tableData by creating table rows
// and cells.

tableData.forEach((alients) => {
    // Create rows
    var row = tbody.append("tr");
   
    Object.entries(alients).forEach(([key, value]) => {
        // Create cells
        var cell = row.append("td");
        cell.text(value);
    });
});

}
// YOUR CODE HERE!
