// Patricia Orty
// Student ID 0004002218
// 10/17/13

// Assignment : Conditionals - Personal

/* Goal: To determine if a learner-permit driver can setup their driving test by seeing if 
the driver is old enough & either has enough hours of driving with a licensed driver (72 hrs.) 
or had gotten a C or better in Drivers Ed */

//Declaration of variables used to gain information for calculation.
var ageDriver;
var hrsDriven;
var gradeDriversED;

//Setting up an Alert to explain the following prompts to gain information for the calculation.
alert("Want to find out if you can schedule your road test?\nThen answer the next few questions to find out today!");

//Defining variables as prompts to gain input for calculation
ageDriver = prompt("How old are you?");
hrsDriven = prompt("What is the total number of hours you have driven with a licensed driver in your vehicle?");
gradeDriversED = prompt("What LETTER grade did you get in Driver's Ed class?");

//Addition of ParseInt to ageDriver and gradeDriversED so that input data is treated as a whole number.
ageDriver = parseInt(ageDriver);
gradeDriversED = parseInt(gradeDriversED);

//Addition of ParseFloat to hrsDriven as a hold number may not be given as an answer
//and I want the information to be treated as a number and decimal points recognized.
