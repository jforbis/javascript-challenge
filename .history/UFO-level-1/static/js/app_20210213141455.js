// from data.js
var tableData = data;

// creating my table
let tbody = d3.select("tbody");

console.log(data);

  data.forEach(function(siting) {
    console.log(siting);
    let row = tbody.append("tr");
    
    Object.entries(siting).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
      });
  });

// listener
id=filter-btn