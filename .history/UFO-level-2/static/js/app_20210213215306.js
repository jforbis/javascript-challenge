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

    let inquiry = {dateFilterData, cityFilterData, stateFilterData, countryFilterData, shapeFilterData, allFilters}

    if (inquiry.allFilters.length !== 0) {
        buildtable(allFilters)
    }
        else if (inquiry.allFilters.length === 0 && ((inquiry.dateFilterData.length !== 0 || inquiry.cityFilterData.length !== 0 || inquiry.stateFilterData.length !== 0 || inquiry.countryFilterData.length !== 0 || inquiry.shapeFilterData.length !== 0))) {
          buildtable(dateFilterData) || buildtable(cityFilterData) || buildtable(stateFilterData) || buildtable(countryFilterData) || buildtable(shapeFilterData);
        }
        else {
          console.log("Something is wrong...");
        }
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