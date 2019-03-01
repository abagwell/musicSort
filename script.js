
function populateBoard(count) {
  
  /* 
  We nned to factor the input number to determine the number of rows and columns with 
  the goal being to find the factors that are closest in size to get a more square table 
  */
  var color = pink;  
  var factor1 = Math.trunc(Math.sqrt(count));
  
  while (count%factor1 != 0) {

    factor1++;

  }

  var factor2 = count/factor1;

  var colorDistribution = distributeColorIndexes(factor1, factor2, color);

  buildTable(factor1, factor2, colorDistribution, color);

  setTimeout(function() {

    doSelectionSort(colorDistribution, color);

  }, 2000);

}

/*
    
*/

function distributeColorIndexes(factor1, factor2, colorScheme) {

  var colorDistribution = [];

  for (var i = 0; i < factor1*factor2; i++) {

    var randomIndex = getRandomIndex(colorScheme.length);
    colorDistribution.push(randomIndex);

  }

  return colorDistribution;

}

/*

*/


function buildTable(factor1, factor2, colorDistrArr, colorScheme) {

  //get table handle 
  var table = document.querySelector("tbody");
  
  //rows are the outer loop, columns are the inner..
  //factor 1 is the row so users can't blow out the html by picking a large prime number
  var cellId = 0; //this value hold the cell id, incrementing with each iteration of loop
  for (var i = 0; i < factor1; i++) {

    var tableRow = document.createElement("tr");

    for (var j = 0; j < factor2; j++) {

      var button = document.createElement("button"); // get button
      button.style.setProperty("background-color", colorScheme[colorDistrArr[cellId]]); //set color according to distribution
      button.setAttribute("id", (++cellId)); //set its id to a unique numerical value
      var tableColumn = document.createElement("td"); //get column
      tableColumn.appendChild(button); //append button to column
      tableRow.appendChild(tableColumn); //append column to row

    }

    table.appendChild(tableRow);

  }

}

/*
  Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomIndex(numOfColors) {

  return Math.floor(Math.random() * (numOfColors- 0) + 0);
}

/*


*/

function updateTable(colorDistrArr, colorScheme) {

  //take the adjusted color distribution and reapply back to the table via a loop 

  for (var i = 1 ; i <= colorDistrArr.length; i++) {

    document.getElementById(i).style.setProperty("background-color", colorScheme[colorDistrArr[i-1]]);

  }

}

function doSelectionSort(colorDistrArr, colorScheme) {

  for (var i = 0; i < colorDistrArr.length; i++) {

    var min = (colorScheme.length + 1); //there's only positive values 
    var index = -1; 
      //find the min
    for (var j = i; j < colorDistrArr.length; j++) {

      if (min > colorDistrArr[j]) {

          min = colorDistrArr[j];
          index = j
      }

    }
      //swap it with the value at the zero index of the sub array
      var swap = colorDistrArr[i];
      colorDistrArr[i] = colorDistrArr[index];
      colorDistrArr[index] = swap; 
      updateTable(colorDistrArr, colorScheme);
      
  }

}

function doSelectionSortIteration(colorDistrArr, colorScheme, start) {

  for (var i = start; i < colorDistrArr.length; i++) {

    var min = (colorScheme.length + 1); //there's only positive values 
    var index = -1; 
      //find the min
    for (var j = i; j < colorDistrArr.length; j++) {

      if (min > colorDistrArr[j]) {

          min = colorDistrArr[j];
          index = j
      }

    }
      //swap it with the value at the zero index of the sub array
      var swap = colorDistrArr[i];
      colorDistrArr[i] = colorDistrArr[index];
      colorDistrArr[index] = swap; 
  }

  return colorDistrArr;

}


populateBoard(49);
