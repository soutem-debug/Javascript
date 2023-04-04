
// 1. Define a function called whosPaying that takes an array of names as input
// 2. Get the length of the input array and store it in a variable called numberOfPeople
// 3. Generate a random integer between 0 and numberOfPeople-1 and store it in a variable called randomIndex
// 4. Retrieve the name at randomIndex from the input array and store it in a variable called randomName
// 5. Return a string message that says "randomName is paying for everyone's lunch today", where randomName is replaced with the actual name that was randomly selected from the input array
// 6. End function


function whosPaying(names) {

    let numberOfPeople = names.length;
    
    let randomIndexOfPeople = Math.floor(Math.random() * numberOfPeople);
  
    let randomName = names[randomIndexOfPeople];
    
        return randomName + " is paying for everyone's lunch today";
        
    }

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe", "Emma", "Michelle", "Joey", "Ben"];

console.log(whosPaying(names)); 

