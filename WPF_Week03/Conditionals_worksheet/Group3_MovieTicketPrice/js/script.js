//Patricia Orty
//Student ID 0004002218
// 9/23/13

// Conditionals Worksheet - Group 3 : Movie Ticket Price

/*Conditional Expression Goal is to determine if movie goer gets discount priced tickets based on
if they are 55 and over or under 10 OR watching a movie between 3 and 5 PM*/

//Declaration of variables necessary in expression.

var movieGoerAge;
var timeOfMovie;
var amPM;
var ticketPrice;
var discountPrice;

//Definition of ticket price variables.

ticketPrice = "$12.00";
discountPrice = "$7.00";

//Definition of remaining variables as prompts to gain user input.

movieGoerAge = prompt("To determine your ticket price,\nplease enter your age.", 55);
timeOfMovie = prompt("Please enter the time of your movie.\n(Just enter in the hour)", 3);
amPM = prompt("Is that AM or PM?","PM");

//Initial if statement to produce a console.log of "The ticket price is $7.00" if age of movie goer is 55 or over or under 10

if((movieGoerAge >= 55) || (movieGoerAge < 10)){
	console.log("The ticket price is " + discountPrice);
}