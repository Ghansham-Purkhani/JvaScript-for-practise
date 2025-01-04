// array collection of multipleData,value 
// multiple array that have diffrent value in variable form comes value in same line 
let city0 = "Atlanta";
let city1 = "Baltimore";
let city2 = "Chicago";
let city3 = "Denver";
let city4 = "Los Angeles";
let city5 = "Seattle";
console.log(city3,city0);
console.clear();
// array form above given value 
let citiesName = ["Seattle","Los Angeles","Denver","Chicago","Baltimore","Atlanta"];
console.log( "welcome to ===>"+ citiesName[3]+" || "+ "welcome to ===>"+ citiesName[0]);
console.clear();
// array first declear then assign the value 
let villageName = []; // declearation
villageName[0] = "Mithi";
villageName[1] = "Islamkot";
villageName[2] = "";
villageName[3] = ""; //empty
villageName[4] ; // undefine
villageName[5] = 5;
console.log(villageName,villageName[3],villageName[4]);
// array methood pop used for remove elemment in end of array
villageName.pop();
console.log(villageName);
// array methood push used for add elemment in end of array
villageName.push("kakraio");
console.log(villageName); // kakrario add 
// array methood shift used for remove elemment in begning/starting of array
villageName.shift();
console.log(villageName); //Mithi remove
// array methood unshift used for add elemment in begning/starting of array
villageName.unshift("Purkhe-ji-dhani");
console.log(villageName); //Purkhe-ji-dhani add  
// array methood splice used for add/remove elemment in array but anywhere in array but
// start from their index second option how many delete from their index
villageName.splice(1,0,"Pabe-jo-tar","mithrio-bhatti");
console.log(villageName);
// array methood splice used for add elemment/remov in array but anywhere in array but
// start from their index second option how many delete from their index,they copy from original array
villageName.splice(3,1,"Pabe-jo-tar","mithrio-bhatti","londar");
console.log(villageName);
