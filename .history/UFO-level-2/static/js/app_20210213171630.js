// from data.js
let tableData = data;

// creating my table
let tbody = d3.select("tbody");

// console.log(tableData);
function buildtable(table) {
  table.forEach(function(siting) {
    // console.log(siting);
    let row = tbody.append("tr");
    
    Object.entries(siting).forEach(function([key, value]) {
        // console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
      });
  });
}
buildtable(tableData);

// listener and function to run when the site's button is clicked
let button = d3.select("#filter-btn");
let button2 = d3.select("#reset-btn");

function dateClick() {
    d3.event.preventDefault();
    tbody.html("");
    // date filter field
    let dateInputField = d3.select("#datetime");
    let dateValue = dateInputField.property("value");
    let filteredData = tableData.filter(date => date.datetime === dateValue);
    if (filteredData.length === 0) {
        buildtable(tableData)
    }
        else buildtable(filteredData)
    
}

function cityClick() {
  d3.event.preventDefault();
  tbody.html("");
  // city filter field
  let cityInput = d3.select("#city");
  let cityValue = cityInput.property("value");
  let cityFilter = tableData.filter(city => city.city === cityValue);
}

function resetClick() {
  tbody.html("");
  buildtable(tableData)
}

button.on("click", handleClick);
button2.on("click", resetClick);

// Filter based on: date, city, state, country, shape