function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr = shuffle(arr);;



let r1 = (num1, num2, num3) => {
return num1 + num2 + num3
}

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