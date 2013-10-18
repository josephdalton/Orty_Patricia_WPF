// Patricia Orty
// Student ID 0004002218
// 10/17/13

// Assignment : Conditionals - Wacky

//Goal: Determine if your dog will chew your shoes while you are out.

//Declaration of variables to be used to hold user information.
var shoesOut;
var hrsAlone;
var scoldedHrsAgo;

//Explanation of following prompts with alert
alert("Our furry friends can get very creative with how they occupy themselves when we are away.\nThe following questions are to determine if your puppy is going to leave your shoes alone while you are out and about.");

//Definition of variables with prompts
shoesOut = prompt("Did you leave your shoes out where puppy can reach? Yes or No?");
hrsAlone = prompt("How many hours has your fur-baby been left alone?");
scoldedHrsAgo = prompt("Have you had to scold your puppy within the last 24 hours? Yes or No?");

//Additon of parseInt to variable hrsAlone as partial hours aren't necessary for statement and it will also ensure that data will be treated as a number.
hrsAlone = parseInt(hrsAlone);

//Addition of toUppercase to outputs of shoesOut and scoldedHrsAgo to ensure data is read as all upperCase to work with conditional.

shoesOut = shoesOut.toUpperCase();
scoldedHrsAgo = scoldedHrsAgo.toUpperCase();

//Use of If statement to display results based on varying inputs
//Note that if statement will not account for dual true answers of hours left alone greater than 6 and scolded within past 24.
//result of hours left alone trumps scolded answer.

if (shoesOut === "YES" || shoesOut === "Y" && hrsAlone > 6){
	console.log("Currently you're being missed and your puppy is licking your shoe for comfort. Better hurry home or it might become a snack!");
} else if ((shoesOut === "YES" || shoesOut === "Y") && (scoldedHrsAgo === "YES" || scoldedHrsAgo === "Y")){
	console.log("Shouldn't have gone out so soon after scolding your pooch for peeing on the carpet. Right now your shoes are a great avenue for venting the upset. Get home quickly before the shoe is finished and your pup sets their sites on something else.");
} else if (shoesOut === "NO" || shoesOut === "N" && ((scoldedHrsAgo === "YES" || scoldedHrsAgo === "Y") || hrsAlone > 6)){
	console.log("Your shoes may be safe but many other objects at home aren't. If I where you I'd check the carpet and/or your couch when you get home.");
}