//
function bubbleSort(colorDistrArr, colorScheme, stepSpeed) {

	var intervalId = setInterval( () => {

		var status = doBubbleSortStep(colorDistrArr, colorScheme)

		if (!status) {

			clearInterval(intervalId);
		}


	}, stepSpeed);

}

function doBubbleSortStep(colorDistrArr, colorScheme) {

	var swapped = true;
	var index = 0;  
	var temp;

	while (swapped) {

		swapped = false; 
		for (var i = 0; i < colorDistrArr.length - 1; i++) {

			if (colorDistrArr[i] > colorDistrArr[i+1]) {

				temp = colorDistrArr[i];
				colorDistrArr[i] = colorDistrArr[i+1];
				colorDistrArr[i+1] = temp;
				swapped = true; 
				updateTable(colorDistrArr, colorScheme);
				
			}
		}
		
		return swapped;
	}
}




/*
 
*/

function selectionSort(colorDistrArr, colorScheme, stepSpeed) {

    var increment = 0; 

    var limit = colorDistrArr.length -1;

    var intervalId = setInterval( () => {

    	if (increment === limit) {

      		clearInterval(intervalId);
    	}
    
    	doSelectionSortStep(colorDistrArr, colorScheme, increment);

    	increment++;

  }, stepSpeed);

}


function doSelectionSortStep(colorDistrArr, colorScheme, start) {

  var min = (colorScheme.length + 1); //there's only positive values 
  var index = -1; 
      //find the min
  for (var j = start; j < colorDistrArr.length; j++) {

    if (min > colorDistrArr[j]) {

        min = colorDistrArr[j];
        index = j
    }

  }
    //swap it with the value at the zero index of the sub array
    var swap = colorDistrArr[start];
    colorDistrArr[start] = colorDistrArr[index];
    colorDistrArr[index] = swap;
    updateTable(colorDistrArr, colorScheme); 
}

function doInsertionSort(colorDistrArr, colorScheme) {

  console.log("hello");

  var sortedArr = [];
  sortedArr.push(colorDistrArr[0]);
  console.log("Here -_ " + sortedArr[0]);
  var tempArr = [];


  for (var i = 1; i < colorDistrArr.length; i++) {

    console.log("Here - " + colorDistrArr[i]);

    var loop = sortedArr.length
    var swapped = false; 

    for (var j = 0; j < loop; j++) {

        if (colorDistrArr[i] < sortedArr[j]) { //check if array value is less than a value in sorted portion

          //push and pop it

          for (var k = j; k < loop; k++) {

            tempArr.push(sortedArr.pop())
          }

          sortedArr.push(colorDistrArr[i]);

          for (var k = j; k < loop; k++) {
            sortedArr.push(tempArr.pop());
          }

          swapped = true;
          break;  
      
        }
    }
    if (!swapped) {

      sortedArr.push(colorDistrArr[i]);
    }
    console.log("sortedArr --  " + sortedArr);


  }

  console.log(sortedArr);
  return sortedArr; 


}