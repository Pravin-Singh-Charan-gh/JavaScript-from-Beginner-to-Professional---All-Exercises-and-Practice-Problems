let heightInInches = 72;
let weightInPounds = 180;

let heightInCentimeters = heightInInches * 2.54;
let weightInKGs = weightInPounds / 2.2046;

console.log( heightInCentimeters, weightInKGs);

let heightInMeters = heightInCentimeters / 100;
let BMI = weightInKGs / heightInMeters**2;

console.log(BMI);

//  Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console:
//  • 1 inch is equal to 2.54 cm
//  • 2.2046 pounds is equal to 1 kilo
//  Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console.