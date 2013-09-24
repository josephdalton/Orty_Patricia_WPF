//Patricia Orty
//Student ID 0004002218
// 9/23/13

// Conditionals Worksheet - Group 1 : Last Chance for Gas!

/*Expression goal : to determine if a driver has enough gas to make it
the next gas station or if they should stop and refill now*/

//declaration of variables to be used in this conditional expression
var carMPG;
var gasGadgePercentage;
var gasTankCapacity;
var nextStation;


//definition of variables with prompts to collect data for calculation.

nextStation = prompt("Can you make it to the next gas station\nOR should you stop NOW and refill?\n\nTo begin calculation please provide distance\nin miles to the next gas station...", 200);

carMPG = prompt("What is your vehicles MPG?", 20);

gasTankCapacity = prompt("How many gallons of fuel can your gas tank hold?", 10);

gasGadgePercentage = prompt("What does your gas gadge read? What is it's percentage full?", 50);

//Calculation to determine how many miles you car can travel on a full tank of gas
//by multiplying carMPG by gasTankCapacity.

var fullTankMiles = carMPG * gasTankCapacity;

//Calculation to determine how many miles can be traveled with current amount of gas.
// by minusing fullTankMiles from fullTankMiles that have been multipled by (100 - gasTankGadgePercentage divided by 100)

var currentTankMiles = fullTankMiles - (100 - gasGadgePercentage) / 100 * fullTankMiles;

//providing if statement for result console.log printout.
// if currentTankMiles is greater than or equal to nextStation then print yes, you can make it without stopping for gas! 
// else "You only have X gallons of gas in your tank, better get gas now while you can!"

