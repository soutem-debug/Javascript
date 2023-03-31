//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// once a return statement is deployed all code underneath becaomes unreacable - as long as you set conditions only one return statement will be deployed as below. 

function bmiCalculator(weight,height) {
    var bmi = weight/Math.pow(height,2); 
     bmi = Math.round(bmi); 

     if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
      } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
      }

}

  var bmi = bmiCalculator(71,1.65)
  console.log(bmi)
