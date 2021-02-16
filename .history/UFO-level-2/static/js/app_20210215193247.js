// from data.js
let tableData = data;

// creating my table
let tbody = d3.select("tbody");

// console.log(tableData);
let buildtable = (table) => {
  tbody.html("");

  table.forEach(function(siting) {
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

    // filter fields
    let dateInputField = d3.select("#datetime");
    let dateValue = dateInputField.property("value");
    let cityInput = d3.select("#city");
    let cityValue = cityInput.property("value");
    let stateInput = d3.select("#state");
    let stateValue = stateInput.property("value");
    let countryInput = d3.select("#country");
    let countryValue = countryInput.property("value");
    let shapeInput = d3.select("#shape");
    let shapeValue = shapeInput.property("value");

    let filteredValues = {date: dateValue, city: cityValue, state: stateValue, country: countryValue, shape: shapeValue};
    console.log(filteredValues);
    console.log(filteredValues.state)
    let filteredData = tableData.filter(values => values.datetime === filteredValues.date);

    
    if(dateValue) {
      let dateFilterData = tableData.filter(date => date.datetime === dateValue);
      if(dateFilterData.length === 0) {
        let datetable = buildtable(dateFilterData);
        console.log(datetable)
      }
      else {
        console.log("something is wrong with date filter")
      }
    }
    else if(cityValue) {
      let cityFilterData = tableData.filter(city => city.city === cityValue);
      if(cityFilterData.length !== 0) {
        buildtable(cityFilterData);
      }
      else {
        console.log("something is wrong with city filter")
      }
    }
    else if(stateValue) {
      let stateFilterData = tableData.filter(state => state.state === stateValue);
      if(stateFilterData.length !== 0) {
        buildtable(stateFilterData);
      }
      else {
        console.log("something is wrong with state filter")
      }
    }
    else if(countryValue) {
      let countryFilterData = tableData.filter(country => country.country === countryValue);
      if(countryFilterData.length !== 0) {
        buildtable(countryFilterData);
      }
      else {
        console.log("something is wrong with country filter")
      }
    }
    else (shapeValue)
      let shapeFilterData = tableData.filter(shape => shape.shape === shapeValue);
      if(shapeFilterData.length !== 0) {
        buildtable(shapeFilterData);
    }
      else {
        console.log("something is wrong with shape filter");
      }
}

// filter buton configuration
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

// if datefiltertable.length && cityfiltertable.length is !==0, then take datefiltertable and filter it by city filter
// include what to show where the table is if a search term/inquiry isn't found