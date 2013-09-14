// JavaScript
//Arrays - Must be declared like Variables
//Variables can be used in Arrays but MUST be declared prior to being included in an Array

var favoriteMuppet = "Ms. Piggy"

var muppetNames = ["Kermit", favoriteMuppet, "Gonzo"];

//Note: Arrays typically only hold 1 type of data : 
// strings or numbers or variables BUT you can mix up the types in an array as shown above

//Array information has an index number. Those numbers start at zero and count up by intigers of 1
// so Kermit has an index number of 0, favoriteMuppet has an index of 1 and Gonzo is 2

console.log (muppetNames);
//This will show the full content of the Array

//To show a piece of the Array's information use a : Array Access Notation
//Simply use [inex number of information in Array you want to show] after Array MuppetNames

console.log (muppetNames[0]);

//now console just shows Kermit
//to change information in an Array you can reference the item needing change via index number.
//think in terms of how variable data information can be changed.

muppetNames[1] = "Rizzo";
console.log(muppetNames[1]);

//Now the 1 information that was Ms.Piggy via usage of the variable favoriteMuppet is changed
//Also note that if I ask to see the whole array then it shows 
//Rizzo and not Ms. Piggy ... the Ms.Piggy information is now hidden and only the new information for that Array is visible
//So it doesn't matter where this change takes place, it will effect the Array no matter where in the code it's used.
//Note now how when I view console the object Array requested above in the code also shows the Rizzo information.

console.log(muppetNames);

//can add to array by selecting an index number for that Array that previously didn't have information

muppetNames[3] = "Fozzy";

console.log(muppetNames[3]);

//Can decare a variable to mean an index number of an Array and then use the variable name to retrieve that index information

var num = 3;

console.log(muppetNames[num]);

//Now note that console will display Fozzy.