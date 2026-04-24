const name = "jayant kushwah";
const age = 26;
const city = "indore";

// Concatenation
const info =
  "My name is " +
  name +
  ", I am " +
  age +
  " years old and I live in " +
  city +
  ".";
console.log(info);

// Template Literals
const infoTemplate = `My name is ${name}, I am ${age} years old and I live in ${city}.`;
console.log(infoTemplate);

name[0] = "J"; // This will not change the string as strings are immutable
console.log(name); // Output: "jayant kushwah"

name = "Jayant Kushwah"; // This will create a new string and assign it to the variable name
name = name.toUpperCase(); // This will create a new string in uppercase and assign it to the variable name
console.log(name); // Output: "JAYANT KUSHWAH"

name = name.toLowerCase(); // This will create a new string in lowercase and assign it to the variable name
console.log(name); // Output: "jayant kushwah"

sliceName = name.slice(0, 6); // This will create a new string with the first 6 characters of name and assign it to the variable sliceName
console.log(sliceName); // Output: "jayant"

characterAtIndex2 = name.charAt(2); // This will return the character at index 2 of the string name and assign it to the variable characterAtIndex2
console.log(characterAtIndex2); // Output: "y"

characterCodeAtIndex2 = name.charCodeAt(2); // This will return the Unicode value of the character at index 2 of the string name and assign it to the variable characterCodeAtIndex2
console.log(characterCodeAtIndex2); // Output: 121

substringName = name.substring(0, 6); // This will create a new string with the first 6 characters of name and assign it to the variable substringName
console.log(substringName); // Output: "jayant"

stringLength = name.length; // This will return the length of the string name and assign it to the variable stringLength
console.log(stringLength); // Output: 14

indexOfK = name.indexOf("k"); // This will return the index of the first occurrence of "k" in the string name and assign it to the variable indexOfK
console.log(indexOfK); // Output: 7

lastIndexOfK = name.lastIndexOf("k"); // This will return the index of the last occurrence of "k" in the string name and assign it to the variable lastIndexOfK
console.log(lastIndexOfK); // Output: 7

includesK = name.includes("k"); // This will return true if the string name includes "k" and assign it to the variable includesK
console.log(includesK); // Output: true

startsWithJ = name.startsWith("j"); // This will return true if the string name starts with "j" and assign it to the variable startsWithJ
console.log(startsWithJ); // Output: true

endsWithH = name.endsWith("h"); // This will return true if the string name ends with "h" and assign it to the variable endsWithH
console.log(endsWithH); // Output: true

trimmedName = name.trim(); // This will create a new string with whitespace removed from both ends of the string name and assign it to the variable trimmedName
console.log(trimmedName); // Output: "jayant kushwah"   

splitName = name.split(" "); // This will create an array of strings by splitting the string name at each space and assign it to the variable splitName
console.log(splitName); // Output: ["jayant", "kushwah"]

joinName = splitName.join(" "); // This will create a new string by joining the elements of the array splitName with a space and assign it to the variable joinName
console.log(joinName); // Output: "jayant kushwah"

toStringName = name.toString(); // This will return the string representation of the variable name and assign it to the variable toStringName
console.log(toStringName); // Output: "jayant kushwah"