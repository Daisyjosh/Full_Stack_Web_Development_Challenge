console.log("Congrats Daisy, you finally started");
let a = 10;
let b = 20;
console.log("Sum is:",a+b)

// Template literals
let output = "Sum is: " + (a + b);
let result = `Sum is: ${a+b}`;
console.log(output); 
console.log(result);
console.log(`Sum is: ${a+b}`);

// alert("something is wrong!")
console.error("This is an error messages");
// prompt("Plese learn")
let Fname = prompt("Enter your name");
console.log(Fname);

const favMovie = "vathikuchi";

let guess = prompt("guess my fav movie")

while(guess != favMovie && guess!= "quit")
{
    guess = prompt("wrong guess, please try again")
}

if (guess == favMovie)
{
    console.log("Congrats");
}
else{
    console.log("you quit");
}