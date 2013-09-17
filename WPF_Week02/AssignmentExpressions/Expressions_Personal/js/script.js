// Patricia Orty
// Student ID 0004002218
// 9/15/13

// Assignment : Expressions - Personal

//Goal of this expression is to calculate the yearly cost of dog food per year, per dog and how much total lbs. of dog food is consumed per dog and bought per year.

//Declaration of variables
var dogFoodCost;
var dogFoodWeight;
var dogFoodMonthAmount;
var howManyDogs;
var nameOfDogFood;

//Alert to explain what information prompts are for.
alert("HELLO\nFollowing will be some questions asked to determine\nhow much dog food you purchase in a year\nand how many lbs. your dog(s) consumes in a year.");

//Defining variables with prompts to gather information for future calculations and console.log readouts.
nameOfDogFood = prompt("What brand is your Dog Food?");
dogFoodWeight = prompt("How many .lbs is the bag of " + nameOfDogFood + " dog food you purchase?");
dogFoodCost = prompt("And how much does a " + dogFoodWeight + "lb. bag of " + nameOfDogFood + " dog food cost?");
dogFoodMonthAmount = prompt("How many bags of dog food do you purchase a month?");
howManyDogs = prompt("How many dogs do you have that eat the " + nameOfDogFood + " dog food?");

//Array created to contain dog food numerical stats
var dogFoodStats = [dogFoodWeight, dogFoodCost, dogFoodMonthAmount];

//Calculation to figure out dog food cost per year by taking dogFoodCost times dogFoodMonthAmount times 12 months.
var foodCostPerYear = parseFloat(dogFoodStats[1]) * parseFloat(dogFoodStats[2]) * 12;

//Calculation to figure out dog food cost per year per dog by taking foodCostPerYear divided by howManyDogs.
var costPerDogPerYear = parseFloat(foodCostPerYear) / parseFloat(howManyDogs);

//Calculation to determine total amount of lbs. of dog food purchased in a year by multiplying dogFoodWeight by dogFoodMonthAmount by 12.
var foodWeightPerYear = parseFloat(dogFoodStats[0]) * parseFloat(dogFoodStats[2]) * 12;

//Calculation to determine total lbs. of dog food consumed by each dog per year by dividing foodWeightPerYear by howManyDogs.
var weightPerDogPerYear = parseFloat(foodWeightPerYear) / parseFloat(howManyDogs);

