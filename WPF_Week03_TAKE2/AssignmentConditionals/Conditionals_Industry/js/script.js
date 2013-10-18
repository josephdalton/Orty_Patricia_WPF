// Patricia Orty
// Student ID 0004002218
// 10/17/13

// Assignment : Conditionals - Industry

// Goal: Calculate lbs. of Turkey to purchase for company holiday dinner. 

//Declaration of variables that are going to be used to hold input information for calculation.
var numberGuests;
var childGuests;

//Alert to explain question prompts
alert("Your company put you in charge of ordering food for the holiday dinner.\nThey decided to do a traditional Turkey dinner and you need to figure out how many lbs. of Turkey to purchase.\nAnswer the following questions to ensure that all your co-workers and their guests have enough Turkey to eat.");

//Declaration of variables as prompts to gather information for calculation.
numberGuests = prompt("How many guests will be in attendance?");
childGuests = prompt("How many of the attendees will be children under the age of 6?");

//addition of parseInt to varables as half people can't exist and they aren't needed for calculation. Will also make sure information is treated as a number.
numberGuests = parseInt(numberGuests);
childGuests = parseInt(childGuests);

//calculation to determine how many adult guests by minusing numberGuests by childGuests.
var totalAdults = numberGuests - childGuests;

//calculation to determing how much turkey adults will consume by taking totalAdults and multiplying it by 1.2 lbs