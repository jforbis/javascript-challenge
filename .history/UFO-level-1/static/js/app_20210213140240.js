// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

console.log(data);

  data.forEach(function(siting) {
    console.log(siting);
    let row = tbody.append("tr");
    
    Object.entries(weatherReport).forEach(function([key, value]) {
        console.log(key, value);
      });
  });