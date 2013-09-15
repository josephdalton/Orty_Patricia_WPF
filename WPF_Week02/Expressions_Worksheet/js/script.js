//Patricia Orty
//Student ID 0004002218
// 9/15/13

// Expressions Worksheet


//Dog Years
// to calculate Sparky's age in dog Years

var ageOfSparky = 5;

//add 7 to Age of Sparky to get Dog Years and store in variable dogYears
var dogYears = ageOfSparky + 7;

//printing out Sparky's human age and then his Dog Age

console.log("Sparky is " + ageOfSparky + " human years old which is " + dogYears + " in dog years.");


//Slice of Pie : Part 1
// creating an expression to calculate how many slices of pizza party goers will have from X number of pizzas ordered.

var slicesPer = 8;
var partyGoers = 10;
var pizzasOrdered = 4;

//multiply Pizzas ordered by the number of slices in a pizza then divide by PartyGoers.

var slicesToGoers = pizzasOrdered * slicesPer / partyGoers;

//printing out the output of slicesToGoers

console.log("Each person ate " + slicesToGoers + " slices of pizza at the party.");

//Slice of Pie : Part II
//  create calcuation of how many slices of Pizza Sparky will get after guests get WHOLE SlICES.

var slicesSparky = pizzasOrdered * slicesPer % partyGoers;

//printing out the output of slicesSparky

console.log("Sparky got " + slicesSparky + " slices of pizza");