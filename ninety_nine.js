// Set the variable numberOfBottles to 99
// Start a WHILE loop that will repeat as long as numberOfBottles is greater than or equal to 0
// Inside the loop, set the variable bottleWord to "bottle" and if numberOfBottles is equal to 1, change the value of bottleWord to "bottles"
// Print out the current value of numberOfBottles and bottleWord followed by the phrase "of beer on the wall"
// Print out the current value of numberOfBottles and bottleWord followed by the phrase "of beer,"
// Print out the phrase "Take one down, pass it around,"
// Decrement the value of numberOfBottles by 1
// Check if numberOfBottles is equal to 1 or 0, and print out the appropriate statement for each case
// End the loop.
// Make it a function called beer 
// Call that function 


function beer () {
var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottles";
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }
  
  if (numberOfBottles === 0) {
    console.log("No more bottles of beer on the wall,");
    console.log("No more bottles of beer,");
    console.log("Go to the store and buy some more,");
    numberOfBottles--;
    console.log("99 bottles of beer on the wall.");
  } else {
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall,");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    if (numberOfBottles === 0) {
      console.log("No more bottles of beer on the wall.");
    } else if (numberOfBottles === 1) {
      console.log(numberOfBottles + " bottle of beer on the wall.");
    } else {
      console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
  }
}
}

beer()



