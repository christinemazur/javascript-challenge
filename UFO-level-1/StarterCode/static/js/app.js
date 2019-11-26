// from data.js
//variables
//tableData gets data from data.js file
var tableData = data;
var filterType = d3.select("#filter-type");
var filterTypeValue = d3.select("#filter-type-value");
var submit = d3.select("#filter-btn");  //select the filter-btn which is the SUBMIT button for me
var tbody = d3.select("tbody");
var dateBox = d3.select("datetime")

console.log(tableData);
autoFill(tableData);

//fill the data into the table
function autoFill(tableData) {

// create table rows (tr) and data elements (td)      

tableData.forEach((aliens) => {
    var row = tbody.append("tr");
   
    Object.entries(aliens).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

}
//Use a date input field in HTML and write JavaScript code that will 
//listen for events and search through the date/time column to find rows that 
//match user input. When clicking the submit button
submit.on("click", function() {
        
    // no refreshing
    d3.event.preventDefault();

    // clear the table
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
    
    var filteredData = tableData.filter(aliens => aliens[typeVal] === inputValue.toLowerCase());
    if (filteredData.length === 0) {
        alert("No Sightings, Sorry!");
        d3.select("#filtertype").node().value = '';
        autoPopulate(tableData);
    }
    console.log(filteredData);
    
    //Display the data by date
    filteredData.forEach((aliens) => {
        // Create a row
        var row = tbody.append("tr");
        //go thru each row
        Object.entries(aliens).forEach(([key, value]) => {
            // 
            var cell = row.append("td");
            cell.text(value);
        });
    });
});  

