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

function insertionSort(colorDistrArr, colorScheme, stepSpeed) {

    console.log("START");
    console.log(colorDistrArr);

    var increment = 1; 

    var limit = colorDistrArr.length -1;

    var intervalId = setInterval( () => {

      if (increment === limit) {

          clearInterval(intervalId);
      }
    
      doInsertionSortStep(colorDistrArr, colorScheme, increment);

      increment++;

  }, stepSpeed);



}

function doInsertionSortStep(colorDistrArr, colorScheme, start) {

  var loop = colorDistrArr.length

  for (var i = start; i < loop; i++) {

    var tempArr = []
    //var loop = start;
    var swapped = false; 

    for (var j = 0; j < start; j++) {

        if (colorDistrArr[i] < colorDistrArr[j]) { //check if array value is less than a value in sorted portion

          //
          var holder = colorDistrArr.splice(i, 1);

          //push and pop it - one less than the starting color distribution length because we removed an index

          for (var k = j; k < loop -1; k++) {

            tempArr.push(colorDistrArr.pop())
          }

          colorDistrArr.push(holder[0]);

          for (var k = j; k < loop-1; k++) {
            colorDistrArr.push(tempArr.pop());
          }

          swapped = true;

          break;  
      
        }
    }

    updateTable(colorDistrArr, colorScheme);
    return;

  }


}