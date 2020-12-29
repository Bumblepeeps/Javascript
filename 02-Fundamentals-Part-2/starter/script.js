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







// ////////////////////////////////////////////////////////////
// // 38. *****************CODING CHALLENGE #1*****************