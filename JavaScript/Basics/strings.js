// methods in string

console.log("Hello");
console.error("This is an error message");
console.warn("This is a warning message");
// alert("It is an alert message");
// let firstName = prompt("Enter you name");

// trim() used to strip the extra spaces at both the ends.

let str = "   Hello    ";
console.log(str.trim()); // Hello


// to lower case
let word = "I am good";
console.log(word.toLowerCase());

// to upper case
console.log(word.toUpperCase());

// string methods with Arguments

let carname = "mmaruthi";
console.log(carname.indexOf("mmaruthi")); // first occurence of "m" as "maruthi" first letter is "m"
console.log(carname.indexOf('z')); // -1
console.log(carname.indexOf("m")); // first occurence of the char's index

// string chaining
let bikename = "   rs200      ";
console.log(bikename.trim().toUpperCase());

// slicing methods

console.log(word.slice(5));  // good
console.log(word.slice(1,4)); // _am
console.log(word.slice(-4)); // str.slice(length-n) // good

// replace method

console.log(word.replace("good","bad")); // I am bad
console.log(word.replace('m','p')); // I ap good

// repeat method
let fruit = "mango";
console.log(fruit.repeat(10)); // mango*10

