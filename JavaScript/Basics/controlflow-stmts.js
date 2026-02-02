// for loop

for(let i = 1; i <= 10; i++)
{
    console.log(i);
}
console.log()
// print all odd numbers from 1 to 15
for(let i = 1; i <= 15; i=i+2)
{   
    console.log(i);
}
console.log()
// print all even numbers from 1 to 15
for(let i = 2; i <= 15; i=i+2)
{   
    console.log(i);
}
console.log();

// nested loops
for(let i = 1; i <= 5; i++)
{
    for(let j = 1; j <= i; j++)
    {
        process.stdout.write("*");
    }
    console.log();
}

console.log();

// while loop
let i = 10;
while(i != 0)
{
    console.log(i);
    i -= 1;
}

const favMovie = "Vathikuchi";

let guess = prompt("guess my fav movie");

while(guess != favMovie && guess!= "quit")
{
    guess = prompt("wrong guess, please try again");
}

if (guess == favMovie)
{
    console.log("Congrats");
}
else{
    console.log("you quit");
}