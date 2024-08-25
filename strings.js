const name = "Nikhil Kumar";
const repoCount = 45;

//   console.log(name + repoCount + " hi"); this is not the good/professional way to concatenate.

console.log(`My name is ${name} and my repocount is ${repoCount}`);     //use this mostly

const gameName = new String("kumar");
console.log(gameName); 

console.log(gameName.length);
console.log(gameName.toUpperCase());    //doesn't changes the originall value
console.log(gameName.charAt("0"));

console.log(gameName); 

//const newString = gameName.substring(1 , 4);

const newString = gameName.slice(-8 , 4); //in slice we can give negative values

console.log(newString);

const anotherString = "     nikhil    kumar    ";
console.log(anotherString.trim());  //trim works on whitespace characters only not the line terminator 

const url = "https://NikhilKumar.com/nikhil%30kumar";
console.log(url.replace('%30', ''));

console.log(url.includes("kuma"));