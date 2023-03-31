// create a variable that identifies and holds the first letter 
// create a FOR loop that iterates through rest of string fron second letter index=1
// IF a letter is the same as firstLetter then return an asterix
// Make into a function



function fixStart(str) {
    // create a variable that identifies and holds the first letter
    let firstLetter = str.charAt(0);
    console.log(firstLetter);

    // / loop through rest of string 
    for (let index = 1; index < str.length; index++) {
        // if a letter matches the first letter then turn it into and asterisk 
        if (str.charAt(index) === firstLetter) {
            str = str.replace(str.charAt(index), '*');
            console.log(str);
        }
    }
}

fixStart("bubble");