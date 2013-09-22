// Conditional Logic - Logical Operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
//if(iPhonePrice < budget){
//	console.log("We can buy the phone!");
//}else{
//	console.log("No phone for you!!");
//}

//if(paycheck > 300){
//	console.log("We can buy the phone!");
//}else{
//		console.log("No phone for you!!");
//}

//problem with using these two ifs... you get two messages and two conflicting messages.
//Now the problem is to combine the two conditional statements

//if(iPhonePrice < budget && paycheck > 300){
//	console.log("We can buy the phone!");
//}else{
//	console.log("No phone for you!!");
//}

//Now if we use || (or Operator)
//if iPhonePrice is less than our budget OR we won the wonLottery

if(iPhonePrice < budget || wonLottery === true){
	console.log("We can buy the phone!");
}else{
	console.log("No Phone for your!!");
}

// as wonLottery is a boolean and already given a true value
//alternatie way to write if is : if(iPhonePrice < budget || wonLottery) -- don't need the triple === (Strict Equality Operator)
