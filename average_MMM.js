var grades = [95,80, 77, 77, 88, 95, 95, 68, 99];
function mean(numbers)
{
    //Set a total var and i that will be used in the loop
    var total = 0, i;
    //loop through the number in the array whilst i is less that the amount of numbers
      for (i = 0; i < numbers.length; i += 1) {
          //increase the total by adding the numbers together
          total += numbers[i];
      }
      //Then return the mean by dividing the total by the amount of numbers in the array
      return total / numbers.length;
}
function median(numbers)
{
    // set values of median and length of array
    var median = 0, numsLen = numbers.length;
    //Sort the array in accesnding order
    numbers.sort();
    //now try to find the middle value whilst it is in order
    //Check if it is an even number
    if(numsLen % 2 === 0)
    {
        //If it is an even number it is the average of the 2 in the middle
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    }
    //if its an odd number {1,2,3,4,5,6,7,}
    else{
       //just the middle number
       median = numbers[(numsLen + 1) / 2];
    }
    return median;
}
function mode(numbers)
{
   //sort the array so all the same numbers are next to each other [95,80, 77, 77, 88, 95, 95, 68, 99];
   numbers.sort();
   //Create an empty array for our counts
   var count_array = [];
   // Set a counter value
   var occured_count = 1;
   //loop though the numbers
   var last_number = null;
   for (const number of numbers) {
     //check if we are still on the same number
     if(number === last_number)
     {
        //increment count
        occured_count++;
     }
     else
     {
        ///Add to array
        if(last_number){
          count_array.push ({ count: occured_count, number: last_number });
        }
        else
        {
          count_array.push ({ count: occured_count, number: number });
        }
        //reset count
        occured_count = 1;
     }
     var last_number = number;
   }
   count_array.sort(function(a, b) {
    return b.count - a.count;
    });
   var highest_number = count_array[0];
   return highest_number.number;
}
console.log("mean = " + mean(grades));
console.log("median = " + median(grades));
console.log("mode = " + mode(grades));









