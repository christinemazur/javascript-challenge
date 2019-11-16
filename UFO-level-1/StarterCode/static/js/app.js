// from data.js
//vaiables
//tableData gets data from data.js file
var tableData = data;
var filterType = d3.select("#filter-type");
var filterTypeValue = d3.select("#filter-type-value");
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

console.log(tableData);
autoPopulate(tableData);

//fill the data into the table
function autoPopulate(tableData) {

// create table rows (tr) and data elements (td)      

tableData.forEach((aliens) => {
    var row = tbody.append("tr");
   
    Object.entries(aliens).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

}
// YOUR CODE HERE!
