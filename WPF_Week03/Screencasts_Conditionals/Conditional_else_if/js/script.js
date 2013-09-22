// Conditional Logic - Else If

var kidHeight = 42;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with parent

//if the child is tall enough, print to the console "You can ride the coaster!"
//if the kid is over 48 inches in height.

if(kidHeight > minHeight){ 
	//code performed if condition is true
	console.log("You can ride the coaster!");
}else if(kidHeight >= wParentHeight){
	//code only looked at if the first if statement (kidHeight > minHeight) is false...if not this is skipped.)
	//This is why order of if and else ifs are important
	console.log("You can ride, but only with a parent present.");
}else{
	//code performed if condition is false
	console.log("Sorry kid, you've got some growing to do first!");
}