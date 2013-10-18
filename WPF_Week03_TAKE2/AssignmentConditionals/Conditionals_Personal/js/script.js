// Patricia Orty
// Student ID 0004002218
// 10/17/13

// Assignment : Conditionals - Personal

/* Goal: To determine if a learner-permit driver can setup their driving test by seeing if 
the driver is old enough & either has enough hours of driving with a licensed driver (72 hrs.) 
or had gotten a 70 or better in Drivers Ed */

//Declaration of variables used to gain information for calculation.
var ageDriver;
var hrsDriven;
var gradeDriversED;

//Setting up an Alert to explain the following prompts to gain information for the calculation.
alert("Want to find out if you can schedule your road test?\nThen answer the next few questions to find out today!");

//Defining variables as prompts to gain input for calculation
ageDriver = prompt("How old are you?");
hrsDriven = prompt("What is the total number of hours you have driven with a licensed driver in your vehicle?");
gradeDriversED = prompt("What NUMBER grade did you get in Driver's Ed class?");

//Addition of ParseInt to ageDriver and gradeDriversED so that input data is treated as a whole number.
ageDriver = parseInt(ageDriver);
gradeDriversED = parseInt(gradeDriversED);

//Addition of ParseFloat to hrsDriven as a hold number may not be given as an answer
//and I want the information to be treated as a number and decimal points recognized.
hrsDriven = parseFloat(hrsDriven);

//Usage of Ternary to determine if driver can or can not schedule a road test.
var overallResult = (ageDriver >= 17 && (hrsDriven >= 72 || gradeDriversED >= 70)) ? "You meet the criteria to schedule your road test. GOOD LUCK!" : "You do not meet the critera to schedule your road test. Reasons are listed below: ";

//Console.log to display overallResult variable information
console.log(overallResult);

//If statements to display criteria not met if Ternary is false

if (ageDriver < 17){
	console.log("- You are not old enough to take your road test.");
}

if (hrsDriven < 72 && gradeDriversED < 70){
	console.log("- You need either:\n \t- Total hours of driving of 72 hrs.\n \t- Grade of 70 or better in drivers Ed class.");
}