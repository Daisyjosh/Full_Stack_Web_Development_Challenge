// Array Data Structure in JavaScript
// Arrays are mutable.
let names = ["Daisy","ALice","Initha"];
console.log(names);
console.log(names.length); // to find the length of the array.
console.log(names[0]); // Daisy
console.log(names[0][0]); // D
console.log(names[0].length); // length of 0th index.
// initializing an Array
let arr = [];

console.log(arr);

let num = [1,2,3,4,5]
console.log(typeof(num)); // object

// num[10] = 11;
// console.log(num); // list elements with empty spaces.

// Array methods

num.push(6); // add to end
console.log(num);
num.unshift(0); // add to start
console.log(num);
num.pop() // deletes last element and returns it
console.log(num);
num.shift() // deletes from start and returns it
console.log(num);

// indexof()
console.log(num.indexOf(5)); // 4
console.log(num.indexOf(9)); // -1
let colors = ["red","blue","green","yellow","purple"]
console.log(colors.indexOf("green")); // 2

// includes() - similar to 'in' operator in python
console.log(num.includes(7)); // false
console.log(num.includes(1)); // true

// concat()
let num2 = [6,7,8,9,10];
let num3 = num.concat(num2);
console.log(num3); // 1 2 3 4 5 6 7 8 9 10

// reverse an array
console.log(num3.reverse()); // 10 9 8 7 6 5 4 3 2 1

// slice - copies from original array
console.log(num.slice()); // prints all the indices
console.log(num.slice(0,2)); // elements from 0 to 2 index.
console.log(num.slice(-2)); // last two element

//splice - removes / replaces / add elements in place starting index inclusive ending index exclusive
console.log(num.splice(3)); // 4 5
console.log(num); // 1 2 3
console.log(num.splice(0,1,7,8)); // removes element from 0th index and deletes one element that is the 0th index and adds the following values.
console.log(num); // 7 8 2 3

// sort() - sorts the array, works best in strings
let nums  = [5,4,3,2,1];
nums.sort();
console.log(nums);

// copy() - reflect changes
let array = [1,2,3,4,5];
let arrayCopy = array;
arrayCopy.push(6);
console.log(array); // 1 2 3 4 5 6


// nested array
let narr  = [[1,2],[3,4],[5,6]];
console.log(narr);
console.log(narr[0]); // 1 2
console.log(narr[0][0]); // 1