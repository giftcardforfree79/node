const input= require('readline-sync');

// taking first player information

let name1= input.question("Enter first player name: ");
let num1= Number(input.question("Enter first player number: "));

//taking second player information
let name2= input.question("Enter second player name: ");
let num2= Number(input.question("Enter second player number: "));

// guessing logic

let guess= Number(input.question("Guess the number: "));
if(guess===num2){
    console.log('player one is the winner');
} 
else  if(guess===num2)
    