// from data.js
var tableData = data;

// creating my table
let tbody = d3.select("tbody");

console.log(data);
function buildtable() {
  data.forEach(function(siting) {
    console.log(siting);
    let row = tbody.append("tr");
    
    Object.entries(siting).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
      });
  });
}

// listener and function to run when the site's button is clicked
let button = d3.select("#filter-btn");

function handleClick() {
    buildtable()
    console.log("A button was clicked!");
}

button.on("click", handleClick);
