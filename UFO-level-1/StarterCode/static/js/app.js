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
//Use a date form in your HTML document and write JavaScript code that will 
//listen for events and search through the date/time column to find rows that 
//match user input.
// when clicking the filter button
submit.on("click", function() {
        
    // no refreshing
    d3.event.preventDefault();

    // clear the  table
    tbody.html("");

    //get the data from box
    var inputElement = d3.select("#filtertype");
     
    var inputValue = inputElement.property("value");
    
    if (inputValue == '') {
        alert("Enter a Date");
        document.getElementById("#filtertype").focus();
        autoPopulate(tableData);
    }
    
    //Filter by date
    var typeVal = d3.select("label").attr("for");
    
    var filteredData = tableData.filter(alients => alients[typeVal] === inputValue.toLowerCase());
    if (filteredData.length == 0) {
        alert("None Found");
        d3.select("#filtertype").node().value = '';
        autoPopulate(tableData);
    }
    console.log(filteredData);
    
    //Displaying the data by date
    filteredData.forEach((aliens) => {
        // Create a row
        var row = tbody.append("tr");
        //go thru each row
        Object.entries(aliens).forEach(([key, value]) => {
            // Creating cells for posting table data
            var cell = row.append("td");
            cell.text(value);
        });
    });
});  //submit

