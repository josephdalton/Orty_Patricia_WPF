// Casting

var stringVar = "6";

var result = 7 + stringVar;

//because stringVar information is string (text) then
//the addition sign performs a concatination instead of a mathmatical addtion.

console.log(result);

var result2 = 7 + Number(stringVar);

console.log(result2);

// Number() causes the string to be treaded for a moment like a Number
// 

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
//(407) 203-4529

var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart)

console.log(phoneNo)