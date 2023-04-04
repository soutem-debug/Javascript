let numbers = [];
let count = 1;

function fizzBuzz() {


  if (count % 3 === 0 && count % 5 === 0) {
    numbers.push("Fizz Buzz");
  } 
  
  else if (count % 3 === 0) {
    numbers.push("Fizz");
  } 
  
  else if (count % 5 === 0) {
    numbers.push("Buzz");
  } 
  
  else {
    numbers.push(count);
  }
  
  count++;


console.log(numbers);
}

fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()