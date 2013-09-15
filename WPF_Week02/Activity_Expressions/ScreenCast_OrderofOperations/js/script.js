// Expressions - PEMDAS - The Order of Operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of the items divided by the number of items

var average = quiz1 + quiz2 + quiz3 + quiz4;

console.log("showing addition of quiz numbers = " + average);


var average1 = quiz1 + quiz2 + quiz3 + quiz4 / 4;

console.log("when addition is not () away from division your code runs division first resulting in a bad answer = " + average1);

var average2 = (quiz1 + quiz2 + quiz3 + quiz4) / 4;

console.log("Now we have the average = " + average2);

// follow PEMDAS or 'please excuse my dear aunt sally' as in Piority of Expressions is Multiplication, Division, Addition then Subtraction.
// JavaScript follows this order regardless of placement in the expression. To push a low priority expression to first priority place in ().
// if you aren't tyring to prioritize addition or subtraction above Multiplication or division then don't use ()
// examples is :

var length = 7;
var width = 6;
var parimeter = length * 2 + width * 2;

console.log("Result of parimeter example : " + parimeter)
