
// The given code implements a function named "fibonacciGenerator" which generates Fibonacci sequence 
// of numbers up to a given value "n" and returns an array of Fibonacci numbers.

function fibonacciGenerator (n) {    

    let output = [];
        if (n === 1) {
            output = [0];
        }
        else if (n === 2) {
            output = [0,1];
        }

        else {
            output = [0,1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    
    }
        
    return output;
}

output = fibonacciGenerator(5);
console.log(output)