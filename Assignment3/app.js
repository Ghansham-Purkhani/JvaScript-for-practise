let dateOfBirth = +prompt("enter date",1);
let monthOfBirth = +prompt("enter month",1);
let yearOfBirth = +prompt("enter year",2004);
let proptMonthOfBirth = monthOfBirth-1;
let enterDate = new Date(yearOfBirth,monthOfBirth-1,dateOfBirth);
let daysOfWeek = ["sundsy","monday","tuseday","wednesday","thursday","friday","saturday"];
let dayOfWeek = daysOfWeek[enterDate.getDay()];
alert(`The day on ${dateOfBirth}/${monthOfBirth}/${yearOfBirth} is ${dayOfWeek}.`); 

// let dateOfBirth = prompt("Enter date", 1);
// let monthOfBirth = prompt("Enter month", 1);
// let yearOfBirth = prompt("Enter year", 2004);

// // Convert inputs to numbers
// dateOfBirth = parseInt(dateOfBirth, 10);
// monthOfBirth = parseInt(monthOfBirth, 10);
// yearOfBirth = parseInt(yearOfBirth, 10);

// // Validate inputs
// if (dateOfBirth < 1 || dateOfBirth > 31 || monthOfBirth < 1 || monthOfBirth > 12) {
//   alert("Invalid date or month entered.");
// } else {
//   // Create a Date object
//   let enterDate = new Date(yearOfBirth, monthOfBirth - 1, dateOfBirth);

//   // Check if the date is valid
//   if (enterDate.getDate() !== dateOfBirth || enterDate.getMonth() !== monthOfBirth - 1) {
//     alert("Invalid date entered.");
//   } else {
//     // Get the day of the week
//     let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let dayOfWeek = daysOfWeek[enterDate.getDay()];

//     // Show the result
//     alert(`The day on ${dateOfBirth}/${monthOfBirth}/${yearOfBirth} is ${dayOfWeek}.`);
//   }
// }





