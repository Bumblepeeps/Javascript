// //32. Activating strict mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; 
//will result in: Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense)
    console.log('I can drive :)')

//The following will result in -- Uncaught SyntaxError: Unexpected strict mode reserved word
// const interface = i;
// const private = p;
// const if = f;

//*******************************************************
// // *****************33. Functions*****************
//FUNCTION: a piece of code we can reuse, like a variable but for whole chunks of code
function logger(name, age) {
    console.log(`My name is ${name}, and I'm ${age} years old. `);
}
//calling / running / invoking functions
logger('bob', 23);
logger('caroline', 15);
logger('cindy', 12);

//functions are like machines, like a food processor. 
//DRY don't repeat yourself. Functions help us keep our code DRY.

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; //becomes the result of running this function
}

const appleJuice = fruitProcessor(5, 0); //inputs / actual values / arguments 5 & 0.
console.log(`apple Juice is: ${appleJuice}`);

const orangeJuice = fruitProcessor(0, 3); //orangeJuice value is being assigned the value of 'juice' that is produced by our function, given the parameters 0, 3. 
console.log(`orange Juice is: ${orangeJuice}`);

const mixedJuice = fruitProcessor(2, 4);
console.log(`mixed Juice is: ${mixedJuice}`);

const num = Number('22'); // Number is a built-in js function, so is "log"

//*******************************************************
// // *****************34. Function Declarations vs Expressions*****************
// function produces a value which can be stored in a variable.
// we'll calculate age based on a given birthYear

//FUNCTION DECLARATIONS - like declaring a variable, can be called before the function is declared in the code
function calcAge1(birthYear) { //input birthYear
    return 2020 - birthYear; //return the value of subtracting birthYear from current year
};
const age1 = calcAge1(1991)
console.log(age1); //log the returned value from the function.

// //FUNCTION EXPRESSIONS -- cannot be called before it is expressed.
const calcAge2 =
    function (birthYear) {//anonymous function (without a name)
        return 2020 - birthYear;
    };
const age2 = calcAge2(1993);
console.log(age1, age2); //log the returned value from the function.

//will learn about hoisting later... impacts when you can call a function. 
//which type of function should I use? Often based on preference. Expressions require each to be assigned a variable and require being expressed before being called / cleaner code.

// //*******************************************************
// // // *****************35. Arrow Functions*****************
// //Arrow function
// const calcAge3 = birthYear => 2020 - birthYear;
// //easier and faster to write, no need for curly braces to define a code block, return happens implicitly, value is automatically returned without the return line. 
// const age3 = calcAge3(1995);
// console.log(age3);

// //how to lose the advantage of the arrow function: multiple lines within function.
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1989, 'Rachel'));
// console.log(yearsUntilRetirement(1996, 'Benji'));


//*******************************************************
// // *****************36. Functions calling other functions*****************
//pretty common, but tough

function cutFruitPieces(fruit) {
    return fruit * 3;
}
//the processor is small and requires cutting up the fruit first. 
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice; //becomes the result of running this function
}
console.log(fruitProcessor(2, 3));

//*******************************************************
// // *****************37. Reviewing Functions*****************
const currentYear = 2020

const calcAge = function (birthYear) {
    return currentYear - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement; //return will immediately exit the function. The function has returned.
        console.log(`${firstName} retires in ${retirement} years.`);//ignored, bc function has been returned.
    } else {
        console.log(`${firstName} has already retired. 🎉`); //not ignored because function has not yet been returned for people who have already retired.
        return -1;
    }
}
console.log(yearsUntilRetirement(1985, 'Daniel'));
console.log(yearsUntilRetirement(1945, 'Mike'));
/**/
// ////////////////////////////////////////////////////////////
// // 38. *****************CODING CHALLENGE #1*****************

/*Each team competes 3 times and average is calc'd for each team
A team ONLY wins if it has DOUBLE or more the average score of the other team. Otherwise, NO team wins.

1. Create an arrow fucntion 'calcAverage' to calc avg of 3 #s (generic)
2. Use the function to calc average for both teams
3. Create a function 'checkWinner' to take average score of each team : avgDolphins avgKoalas.
Function logs the winner to console with the victory points, according to the rules.
"Koalas win (30 vs. 13)"
4. checkWinner function called to determine winner for both data1 and data2
5. Ignore draws this time
*/
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= (avgKoalas * 2)) {
        return `Dolphin Team`;
    } else if (avgKoalas >= (avgDolphins * 2)) {
        return `Koala Team`;
    } else {
        return `No one`;
    }
}

//DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// console.log(`Data set 1 Scores -- Dolphins: ${scoreDolphins} Koalas: ${scoreKoalas}`);
console.log(`${checkWinner(scoreDolphins, scoreKoalas)} wins! ${scoreDolphins} to ${scoreKoalas}`);

//DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// console.log(`Data set 2 Scores -- Dolphins: ${scoreDolphins} Koalas: ${scoreKoalas}`);

console.log(`${checkWinner(scoreDolphins, scoreKoalas)} wins! ${scoreDolphins} to ${scoreKoalas}`);
