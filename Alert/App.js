 alert("hello")  // Simple popop through alert
 var a = "hello"
 alert(a) // Simple popop through  variable and alert

 // covertion of string to number 01 way
var newData = +prompt("enter number")
console.log(newData, typeof newData);
console.clear();
// covertion of string to number 02 way
var newData = prompt("enter number")
console.log(+newData, typeof +newData); 
// covertion of string to number 03 way
let str1 = "42";
let num1 = Number(str1);
console.log(num1); // 42 (number)
// covertion of string to number 04 way its recomdend way best practice
let str0 = "42";
let str2 = "42.5";
let intNum = parseInt(str1); // 42
let floatNum = parseFloat(str2); // 42.5
console.log(intNum, floatNum);
// covertion of string to number 05 way 
var str = "42";
var num = ~~str;
console.log(num); // 42

// now convert number to string (01) The String() function explicitly converts a number to a string
let num4 = 42;
let str6 = String(num4);
console.log(str6); // "42"
// The toString() method converts a number to a string
let num3 = 42;
let str7 = num3.toString();
console.log(str7); // "42"



