let city = "Afghanistan"
console.log(city.slice(0, 3))
console.log(city.charAt(5))
console.log(city[6]);
console.log(city.indexOf("s"));
console.log(city.lastIndexOf("a"));
console.log(city.replace("A", "P"));
console.log(city.replaceAll("a", "t"));
// last char of string
let country = "mithi"
const lastIndex = country.length - 1
const lastElement = country.charAt(lastIndex)
console.clear()
console.log(lastElement)
country = country.replace("P", "I")
console.log(country)
country = country.replace("a", "b")
console.log(country)
country = country.replaceAll("a", "c")
console.log(country)
country = country.replaceAll("i", "j")
console.log(country)