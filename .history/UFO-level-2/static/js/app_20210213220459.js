// from data.js
let tableData = data;

// creating my table
let tbody = d3.select("tbody");

// console.log(tableData);
function buildtable(table) {
  tbody.html("");
  table.forEach(function(siting) {
    let row = tbody.append("tr");
    Object.entries(siting).forEach(function([key, value]) {
        let cell = row.append("td");
        cell.text(value);
      });
  });
}
buildtable(tableData);

// listener and function to run when the site's button is clicked
let button = d3.select("#filter-btn");
let button2 = d3.select("#reset-btn");

function filterClick() {
    d3.event.preventDefault();
    tbody.html("");
    // date filter field
    let dateInputField = d3.select("#datetime");
    let dateValue = dateInputField.property("value");
    let dateFilterData = tableData.filter(date => date.datetime === dateValue);
    let cityInput = d3.select("#city");
    let cityValue = cityInput.property("value");
    let cityFilterData = tableData.filter(city => city.city === cityValue);
    let stateInput = d3.select("#state");
    let stateValue = stateInput.property("value");
    let stateFilterData = tableData.filter(state => state.state === stateValue);
    let countryInput = d3.select("#country");
    let countryValue = countryInput.property("value");
    let countryFilterData = tableData.filter(country => country.country === countryValue);
    let shapeInput = d3.select("#shape");
    let shapeValue = shapeInput.property("value");
    let shapeFilterData = tableData.filter(shape => shape.shape === shapeValue);
    let allFilters = tableData.filter(tableData => tableData.datetime === dateFilterData && tableData.city === cityFilterData && tableData.state === stateFilterData && tableData.country === countryFilterData && tableData.shape === shapeFilterData);
    console.log(allFilters)

    // if(dateFilterData){
    //   // 2. Filter the data
    //   var tableData_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);
    
    //   // 3. Load the new data
    //   if(tableData_Filtered.length !== 0) {
    //     loadTableRows(tableData_Filtered);
    //   }
    //   else {
    //     // Clear out the previously loaded HTML:
    //     tbody.html("");
        
    //     // Tell them "No rows match"
    //     tbody.append("tr").append("td").text("You are unlucky - no sightings on this date");
    //   }
    // }
}

// filter buton configuration - need to update the 'dateClick' part
button.on("click", filterClick);

// reset button configuration
button2.on("click", resetClick);
function resetClick() {
  tbody.html("");
  buildtable(tableData)
  document.getElementById("datetime").value = ""
  document.getElementById("city").value = ""
  document.getElementById("state").value = ""
  document.getElementById("country").value = ""
  document.getElementById("shape").value = ""
}