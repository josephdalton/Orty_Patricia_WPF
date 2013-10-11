// Patricia Orty
// Student ID 0004002218
// 10/10/13

// Assignment : Expressions - Industry

//Goal of the calculation is to show the amount of profit made by a project.

//Declaration of variables for use in calculation.
var supplyCost;
var hourlyRate;
var hoursWorked;

//Alert to explain upcoming prompts for information.
alert("Please answer the following questions to determing the profit of your last project");

//Definition of variables with prompts to gather information for calculation.
supplyCost = prompt("What is the total cost of project supplies?");
hourlyRate = prompt("What is your hourly rate charge?");
hoursWorked = prompt("How many hours did it take to complete the project?");

//Storing all data from prompts for calculation in an array.
var projectInfo = [supplyCost, hourlyRate, hoursWorked];

//Calculation to determine total charge for project by multiplying hourlyRate by hoursWorked.
var projectCustPmnt = projectInfo [1] * projectInfo [2];


