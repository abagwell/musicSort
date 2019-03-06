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

//obsolete

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