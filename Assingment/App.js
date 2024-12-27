var martricMarks = prompt("enter matric marks");
var entrycMarks = prompt("enter entry marks"); 
var percentage = martricMarks+entrycMarks/200*100;
if(percentage>=70){
    console.log("eliglible"); 
} else{
    console.log("not eligible"); 
}