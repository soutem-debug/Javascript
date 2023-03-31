// Write a program that works out whether if a given year is a leap year.

// The rules: 
// A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.

// create a function that takes year as an argument 
// take that year and work out if it is divisable by 4 
// take the year and work out if it is divisable by 100 
// take the year and work out if it is divisable by 400 

// if all are true the function will return this is a leap year 
// Else not a leap year 



function isLeap(year) {


    const div4 = year % 4;
    const div100 = year % 100;
    const div400 = year % 400;

    if (div4 === 0 && div100 !== 0 || div400 === 0) {
    return "Leap year"
    } else {
    return "Not a leap year "
  }
    }

    console.log(isLeap(1989))
