let dateTime = new Date();
console.log(dateTime);  //get date 
console.clear();
console.log(dateTime.getDate()); // they give only date 
console.clear();
console.log(dateTime.getDay()); // they give only day which start from 0,1.2.3.4.5.6 its means sunday 
console.clear();
console.log(dateTime.getMonth()); // they give only Month start from 0,1,2.....11. 
console.clear();
console.log(dateTime.getFullYear()); // they give only year as like 2025,2024 extra 
console.clear();
console.log(dateTime.getHours()); // they give only clock
console.clear();
console.log(dateTime.getMinutes()); // they give only Mintus
console.clear();
console.log(dateTime.getSeconds()); // they give only second
console.clear();
console.log(dateTime.getMilliseconds()); // they give only milisecond
console.clear();
let days = ["Sun","Mon","Tuse","Wed","Thur","Fri","Sat"];
console.log(days[dateTime.getDay()]); // from get days then search in array on which index which one day
console.clear();
let setDate = new Date(" june 1 2025");
console.log(setDate);
console.clear();
let getday = new Date ("1 jan 2004");
let setday = new Date ("8 jan 2025");
console.log(setday-getday);
console.clear(); 