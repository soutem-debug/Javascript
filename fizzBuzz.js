
// 1. using For loop;
// 2. condition - i = 1 i < 20 i++ using eithe FOR or WHILE 
// 3. using if statement;
// 4. if i == multiple of 3
// 5. print out Fizz
// 6. else if i == multiple of 5
// 7. print out Buzz
// 8. else if i == multiple of 3 and 5
// print out FizzBuzz


for(let i=1; i<50; i++){

  if(i % 15 === 0) {
    console.log('FizzBuzz');
  } 
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
   else if (i % 5 === 0) {
    console.log('Buzz');
   } 
   else {
     console.log(i);
   }
  }