// Patricia Orty
// Student ID 0004002218
// 10/8/13

// Assignment : Expressions - Personal

//Goal: To calculate how many week's til a person's running shoes should be replaced and an estimate of how much a year they will spend on new shoes.

//Declaration of Variables for use in prompts for information necessary for the calculations.
var typeOfShoes;
var milesRun;
var runsAWeek;
var costOfShoes;

//Alert explaining following prompts for information
alert("It's recommened to replace running shoes every 300 miles. \nPlease answer the following questions to find out when you will need to purchase new shoes \n& roughly how many times a year and how much you will spend on running shoes this year.");

//Defining above variables as prompts to collect information for calculations.
typeOfShoes = prompt("What brand of running shoe do you use?");
costOfShoes = prompt("How much does a pair of " + typeOfShoes + " cost?");
milesRun = prompt("What is the number of miles you run, when you run, on average?");
runsAWeek = prompt("How many times do you run a week?");

//Placing run information in an array
var runRoutine = [milesRun, runsAWeek];

/* Calculation to determine miles run a year multiplying milesRun by runsAWeek by 52 (weeks in a year). 
parseInt will be added as for the purposes of the estimate I want to deal with only whole numbers.*/
var totalMilesYear = parseInt(runRoutine [0]) * parseInt(runRoutine [1]) * 52;

//Calculation to determine how many shoes would need to be purchased in a year by dividing 300 by totalMilesYear.
var shoesYear = 300 / totalMilesYear;

//adding parseInt to shoesYear as this is an estimate and you can't buy just one shoe or a quarter of a shoe.
shoesYear = parseInt(shoesYear);
