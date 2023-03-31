// Write a loop that outputs the 7 times table, from 7 × 1 = 7 to 7 × 12 = 84
// Get your program to console.log each value in the 7 times table like so:
// 	7
// 		14
// 		21
// …
// Change your program to to say which multiplication produced it, e.g.:
// 	7 x 1 = 7
// 		7 x 2 = 14
// 		7 x 3= 21
// …

// Bonus: Try using a loop inside a loop to write all the times tables, from 1 to 12.


// let num = 7;
// let answer;

// for (var index = 1; index <= 12; index++) {

//     answer = num*index;
//     console.log(answer=num*index);
// }


// First you will need 2 FOR loops 
// That hold 2 iteratrions 1-12
// First for loop creates an index from 1 to 12 
for (let i = 1; i <= 12; i++) {
    // Then a FOR loop inside a loop for second index
    for(let j = 1; j <= 12; j++)
    // console log statement that multiplies i by j with an equals statement saying i times j
    console.log (`${i}*${j} = ${i*j}`);

}

