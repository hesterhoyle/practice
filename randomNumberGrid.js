// Aimed to make a grid that shows numbers 1-9, without any repeating numbers but random layout.
// Also wanted to add up the lines (diagonal directions, as well as vertical and horizontal directions)

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // while there's remaining elements to shuffle
    while (0 !== currentIndex) {
  
     // pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // swaps it with a current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // with the array and shuffle
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr = shuffle(arr);;


// added a function to add the 3 numbers together
let r1 = (num1, num2, num3) => {
return num1 + num2 + num3
}

//Grid and numbers display below
console.log((r1(arr[0], arr[4], arr[8]))
+ "  " + (r1(arr[0], arr[3], arr[6]))
+ "  " + (r1(arr[1], arr[4], arr[7]))
+ "  " + (r1(arr[2], arr[5], arr[8]))
+ "  " + (r1(arr[2], arr[4], arr[6])))
console.log("   ------------|")
console.log("      |   |    |")
console.log(`    ${arr[0]} | ${arr[1]} | ${arr[2]} ` + " | " + (r1(arr[0], arr[1], arr[2])))
console.log("      |   |    |")
console.log("   ------------|")
console.log("      |   |    |")
console.log(`    ${arr[3]} | ${arr[4]} | ${arr[5]} ` + " | " + (r1(arr[3], arr[4], arr[5])))
console.log("      |   |    |")
console.log("   ------------|")
console.log("      |   |    |")
console.log(`    ${arr[6]} | ${arr[7]} | ${arr[8]} ` + " | " + (r1(arr[6], arr[7], arr[8])))
console.log("      |   |    |")