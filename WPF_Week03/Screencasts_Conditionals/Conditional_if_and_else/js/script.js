// Conditional Logic - if & Else

var kidHeight = 46;
var minHeight = 48;

//if the kid is over 48 inches in height : good to state out if than statemend in plain english prior to coding it.
//can compair with a static number...ie. kidHeight > 48 or can compair to another variable as shown.

if(kidHeight > minHeight){ 
	//code performed if condition is true
	console.log("You can ride the coaster!");
}else{
	//code performed if condition is false
	console.log("Sorry kid, you've got some growing to do first!");
}

//can add another if statement to produce a printout if kidHeight is under minHeight.
//Note that would have to use <= as if I just use < and exact minHeight of 48 would not produce a printout
//as its not greater and its not less than... but exact... so be careful!

//if (kidHeight < minHeight){
//	console.log("Sorry kid, you've got some growing to do first!");
//}
//Now for something easier that doesn't require another if statement with a relational opperator.
//use ELSE...see above.
