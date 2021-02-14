// from data.js
var tableData = data;

// creating my table
let tbody = d3.select("tbody");

console.log(tableData);
function buildtable() {
  data.forEach(function(siting) {
    // console.log(siting);
    let row = tbody.append("tr");
    
    Object.entries(siting).forEach(function([key, value]) {
        // console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
      });
  });
}
buildtable();

// listener and function to run when the site's button is clicked
let button = d3.select("#filter-btn");

function handleClick() {
    d3.event.preventDefault();
    let inputField = d3.select("#datetime");
    let inputValue = inputField.property("value");

    console.log(inputValue);

    let filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);
    buildtable(filteredData)
}

button.on("click", handleClick);
