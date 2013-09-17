// Patricia Orty
// Student ID 0004002218
// 9/15/13

// Assignment : Expressions - Industry

//Purpose of this Expression is to add up the expenses of an Event/Fundraiser 
//and calculate what percent of the yearly budget the Event/Fundraiser uses.

//declaring variables for calculation of total event cost.
var sponsorshipOrBoothCost;
var costOfEventGivaways;
var foodExpenses;
var fundraiserEventName;

//creating alert to explain prompts.

alert("Answering the next few questions involving \nyour current event/fundraiser costs and yearly budget\nwill allow us to calculate the percentage of your \nyearly budget that was utilzed for your event/fundraiser.\n\n\tHope you find this useful.\n\tThank you.");

//creating prompts to gather information for event cost variables.

fundraiserEventName = prompt("Please type in event/fundraiser name.");

sponsorshipOrBoothCost = prompt("Please type in sponsorship fee or event booth cost.");

costOfEventGivaways = prompt("Please provide total cost of giveaways for event/fundraiser.");

foodExpenses = prompt("Please provide total cost of event/fundraiser food expenses.");

//placing variables in an Array to house event costs.

var eventExpenses = [sponsorshipOrBoothCost, costOfEventGivaways, foodExpenses];

//creating of eventCostTotal variable and defining it to add the eventExpenses Array variables.

var eventCostTotal = parseFloat(eventExpenses[0]) + parseFloat(eventExpenses[1]) + parseFloat(eventExpenses[2]);



