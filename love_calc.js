
// Psudeo code 
// . create a prompt for first name (first and last name)
// . create a prompt for second name (first and last name) 
// . the programme does nothing with this information
// . create a script to calculate a random number between 1 and 0
// . this number shouuld be presented as a percentage 
// . alert the user that they are thius much percentage likely to find love together including both names 
// . add comparators to make 'game'

// Three main comparators
// && = AND whether condition 1 is true and if condition 2 is true
// || = OR is condition 1 true or condition 2 
// ! NOT  or the opposite of something


function loveCalculator (loveScore) {

    // sequential order - will check highest value first!
    
  var name1 = prompt("Enter first name: ");
  var name2 = prompt("Enter second name: ");
  
  var loveScore = Math.random();
  loveScore = Math.floor(loveScore*100) + 1;
  
  if (loveScore === 0) {
     console.log("Your LOVE score is: " + loveScore + "%" + "LOVE IS DEAD");
  }
    
    else if (loveScore <= 30) {
      console.log("Your LOVE score is: " + loveScore + "%" + " Deeply unlikely to get past 3 days");
  }
    
    else if (loveScore <= 70) {
      console.log("Your LOVE score is: " + loveScore + "%" + " Could be a fun fling!");
  }
    
    else if (loveScore >= 70 && loveScore <= 99) {
      console.log("Your LOVE score is: " + loveScore + + "%" + " Your LOVE is FIRE!");
    }
    
    
    else if (loveScore === 100) {
      console.log("Your LOVE score is: " + loveScore + "%" + " You love each other like Pooh loves honey!");
    }
    
    
    else {
      console.log("ERROR");
    }
  
  }
  
  loveCalculator();
  
  
  // var result = alert(name1 + " & " + name2 + " your potential for love is " + loveScore + "%")