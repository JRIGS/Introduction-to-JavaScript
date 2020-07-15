// TEST for console 
// console.log("Hello, World!");

/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

// var votingAge = 18;

// if (votingAge >= 18) {
//     console.log("You are old enough to vote!");
// }

// else {
//     console.log("You are not old enough to vote!");
//   }

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

// var month = "May";

// if(month === "May"){
//     var month = "Summer time"
// }
// else{
//     var month = "Off season"
// }

// console.log(month);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

// var x = "1999"

// Number(x);

// console.log(x);

// OR

// var x = "1999"

// parseInt(x);

// console.log(x);



//Task d: Write a function to multiply a*b 

// function multiply(num1, num2){

// return num1 * num2;

// }

// let num1 = '2'
// let num2 = '5'

// console.log(multiply(num1, num2));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

// function getDogYears(humanAge) {
//         return humanAge * 7;
//     }

//     console.log("You are " + getDogYears(7) + " years old in dog years");
    

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// const dogFeeder = (weight, age) => {

// }




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 




/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// Miles to Kilo
// function getKilometers(i) {
//      return i*1.60935;
// }
// // Kilo to Miles
// function getMiles(i) {
//      return i*0.6213688756;
// }

// console.log(getKilometers(3) + " Miles");

// console.log(getMiles(3) + " Kilometers");

// https://www.calculator.net/conversion-calculator.html

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

// function getFeet(i) {
//     return i*30.48;
// }
// function getCentimeters(i) {
//     return i*0.032808399;
// }

// console.log(getFeet(5) + " centimeters");

// console.log(getCentimeters(5) + " feet");




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

// var bottles = 99;

// function annoyingSong(num){

//     if(num <= 99 && num >= 0){
//     num--;

//     return num;
//     }
// }

// console.log(annoyingSong(bottles));

// function annoyingSong() {
//     var bottles;
//     var bottlesLeft;
//     for (i = 99; i >= 1; i--) {

//         if (i == 1) {
//             bottles = "bottle";
//             bottlesLeft = "No bottles of beer on the wall!";
//         } else {
//             bottles = "bottles";
//             bottlesLeft = i - 1 + " bottles of beer on the wall!";
//         }
//         console.log(i + " " + bottles + " of beer on the wall,");
//         console.log(i + " " + bottles + " of beer,");
//         console.log("Take one down, pass it around,");
//         console.log(bottlesLeft);
//     }

// }
// console.log(annoyingSong());


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

// function finalGrade(total){

//     if(total >= 90 && total <= 100){
//         console.log("A");
//     }

//     if(total >= 80 && total <= 89){
//         console.log("B");
//     }

//     if(total >= 70 && total <= 79){
//         console.log("C");
//     }

//     if(total >= 60 && total <= 69){
//         console.log("D");
//     }

//     if(total <= 59){
//         console.log("F");
//     }

// }
// console.log(finalGrade(62));





/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object