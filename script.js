
function populateBoard(count) {
  
  /* 
  We nned to factor the input number to determine the number of rows and columns with 
  the goal being to find the factors that are closest in size to get a more square table 
  */

  var factor1 = Math.trunc(Math.sqrt(count));
  
  while (count%factor1 != 0) {

    factor1++;

  }

  var factor2 = count/factor1;

  console.log(factor1);
  console.log(factor2);

  //get table handle 
  var table = document.querySelector("tbody");
  
  //rows are the outer loop, columns are the inner..
  //factor 1 is the row so user's can't blow out the html by picking a large prime number
  for (var i = 0; i < factor1; i++) {

    var tableRow = document.createElement("tr");

    for (var j = 0; j < factor2; j++) {

      var button = document.createElement("button");
      var tableColumn = document.createElement("td");
      tableColumn.appendChild(button);
      tableRow.appendChild(tableColumn);

    }

    table.appendChild(tableRow);

  }

}

populateBoard(52);
