let toCheck = prompt("enter city name","mithi ===> enter in lowercase");
toCheck = toCheck.toLowerCase();
let cleanestCities = ["mithi","islamkot","nagar","chelhar"];
let dirtytCities = ["diplo","umerkot","chachro","kunri"];

for(i=0;i<=4;i++){
    if(toCheck===cleanestCities[i]){
        console.log(toCheck,"===> clean city of tharparker");
        break;
    } else if(toCheck===dirtytCities[i]){
        console.log(toCheck ,"===> dirty city of tharparker");
        break;
    } else if(toCheck!==cleanestCities&&dirtytCities) {
        console.log(toCheck,"===>Doesnot preesnt in my registration");   b    
       
    }
}