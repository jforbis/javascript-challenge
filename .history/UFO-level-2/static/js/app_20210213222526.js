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
    // tbody.html("");
    // date filter field
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
    // let allFilters = tableData.filter(tableData => tableData.datetime === dateFilterData && tableData.city === cityFilterData && tableData.state === stateFilterData && tableData.country === countryFilterData && tableData.shape === shapeFilterData);
    // console.log(allFilters)
    if(dateFilterData) {
      let dateFilterData = tableData.filter(date => date.datetime === dateValue);
      if(dateFilterData.length !== 0) {
        buildtable(dateFilterData);
      }
      else {
        console.log("something is wrong with date filter")
      }
    else if(cityFilterData) {
      let cityFilterData = tableData.filter(city => city.city === cityValue);
      if(cityFilterData.length !== 0) {
        buildtable(cityFilterData);
      }
    }
      else {
        console.log("something is wrong with city filter")
      }
    }
    else if(stateFilterData) {
      let stateFilterData = tableData.filter(state => state.state === stateValue);
      if(stateFilterData.length !== 0) {
        buildtable(stateFilterData);
      }
    }
      else {
        console.log("something is wrong with state filter")
      }
    }
    else if(countryFilterData) {
      let countryFilterData = tableData.filter(country => country.country === countryValue);
      if(countryFilterData.length !== 0) {
        buildtable(countryFilterData);
      }
    }
      else {
        console.log("something is wrong with country filter")
      }
    }
    else (shapeFilterData) {
      let shapeFilterData = tableData.filter(shape => shape.shape === shapeValue);
      if(shapeFilterData.length !== 0) {
        buildtable(shapeFilterData);
      }
    }
      else {
        console.log("something is wrong with shape filter")
      }
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