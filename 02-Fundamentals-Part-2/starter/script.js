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

//*******************************************************
// // *****************39. Introduction to Arrays*****************

const friend1 = 'Caleph';
const friend2 = 'Rachel';
const friend3 = 'Becca';
//literal syntax
const friends = ['Caleph', 'Rachel', 'Becca'];
console.log(friends[0]);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y[1]);
console.log(friends.length);
//to get last item in an array, just account for arrays starting with 0, and length being absolute count of items.
//inside of square brackets, js expects an expression, not a statement.
console.log(friends[friends.length - 1]);

//mutate the array, add or remove
friends[2] = 'Jake';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
// Exercise
const years = [1990, 1967, 2002, 2010, 2018];
const ageA = calcAge(years[0]);
const ageB = calcAge(years[1]);
const ageC = calcAge(years[years.length - 1]);
console.log(`AGES:::::`);
console.log(ageA, ageB, ageC);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//*******************************************************
// // *****************40. Basic Array Operations (Methods)*****************
//push = add to end -- push is a method/function, which can also do some work. 

const newLength = friends.push('Rebecca'); //returns the **length of the array.**
console.log(friends);
console.log(newLength);
//unshift = add to beginning
friends.unshift('John'); //if logged, would return the unshifted (added to beginning) element 'John' 
console.log(friends);
//pop = remove from end / last item
const popped = friends.pop(); //returns the popped element text 'Rebecca'
console.log(friends);
console.log(popped);
//shift = remove from beginning
friends.shift(); // if logged, would return the shifted element ' John'
console.log(friends);

//RECAP:
//push = end, add
//pop = end, remove
//unshift = start, add
//shift = start, remove

//to log the index of a specified element:
console.log(friends.indexOf('Rachel'));//returns 1 (2nd item in array)
console.log(friends.indexOf('Jerk'));//not in array, so returns -1

//includes - instead of returning the index of given element, will simply return true or false based on element's existence in the array.
console.log(friends.includes('Rachel'));//true
console.log(friends.includes('Jerk'));//false
//uses strict equality for this check
friends.push(23);
console.log(friends.includes('23'));//false because no type coercion - this is checking for 23 the string. 
console.log(friends.includes(23));//true
//can use the include method for conditionals
if (friends.includes('Peter')) {
    console.log(`You have a friend called Peter`);
}
else {
    console.log(`Peter is not your friend`);
}
/**/
// ////////////////////////////////////////////////////////////
// // 41. *****************CODING CHALLENGE #2*****************
//Tip calculator. Tip 15% If bill between 50 and 300. Otherwise, tip 20%. 
//1. function called calcTip taking any bill value as input and returns corresponding tip. 

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}
//testing that the function works:
let tip = calcTip(301);
console.log(`Tip: ${tip}`);

//now use arrays

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(`Tips: ${tips}`);
console.log(tips);

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(`Totals: ${totals}`);

//*******************************************************
// // *****************42. Introduction to Objects*****************
//Objects are another data structure in JS, in addition to Arrays. Consist of key value pairs.
const chris = {
    firstName: 'Chris',
    lastName: 'Jones',
    age: 2020 - 1989,
    job: 'automation engineer',
    friends: ['Rachel', 'Ben', 'Jason', 'Batman']
};
//object literal syntax ^ bc we're literally writing the object content into the code.
console.log(chris);
console.log(chris.firstName, chris.lastName);
//*******************************************************
// // *****************43. Dot vs. Bracket Notation*****************
//will learn how to retrive and change data from objects
//DOT notation:
console.log(chris.firstName, chris.lastName);
//I guess I already knew how to do dot notation. 

//BRACKET notation:
console.log(chris['job']);

//within the square brackets, we can put any expression. We can retrive the property by concatenation for example:
const nameKey = 'Name';
console.log(chris['first' + nameKey]); //Chris
console.log(chris['last' + nameKey]); //Jones
//OR with template literal:
console.log(chris[`last${nameKey}`]); //Jones

// const interestedIn =
//     prompt(`what do you want to know about Chris? Choose between firstName, lastName, age, job and friends`);

// // console.log(chris[interestedIn]); //first time I did this, I put interestedIn as a string. That doesn't work, duh.

// if (chris[interestedIn]) {
//     console.log(chris[interestedIn]);
// } else {
//     console.log(`I don't know that much... Choose between firstName, lastName, age, job and friends.`);
// }

//Adding new properties to object

chris.state = 'Virginia';
chris['WowHandle'] = 'Adjasont';
// console.log(chris);

//Exercise / Challenge
//`Chris has 3 friends and his best friend is Rachel.`

console.log(`${chris.firstName} has ${chris.friends.length} friends and his best friend is ${chris.friends[0]}. His WoW handle is ${chris.WowHandle}.`)

//*******************************************************
// // *****************44. Object Methods*****************
const jon = {
    firstName: 'Jon',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'udemy teacher',//string value
    friends: ['Michael', 'Peter', 'Steven', 'Clawman'],
    hasDriversLicense: true,//boolean value
    // //function value - commenting out for new function
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () { //removing parameter, bc gonna read birthYear directly from object using 'this'
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () { //removing parameter, bc gonna read birthYear directly from object using 'this'
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-yr-old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} Driver's License`
    }


};

//any function that is attached to an object is called a method. We assign the "calcAge" key a value output from the method above.

//Could not have used a function declaration, like below, only a function expression as above. 
//function calcAge(birthYear) {
//     2037 - birthYear;
// }
console.log(jon.calcAge());
console.log(jon.age);
console.log(jon.age);
console.log(jon.age);

// console.log(jon.calcAge(jon.birthYear));
// console.log(jon['calcAge'](jon.birthYear));


//Challenge / Exercise
//"Name is a X- yr old --job-- , and he has a/no driverslicense"
// const hasLicense = ;

console.log(jon.getSummary());

//bridge between methods and objects::::
//in this lecture we created our own methods to use on objects, but arrays are objects with built-in methods for manipulation like push, pop, shift, unshift.

// ////////////////////////////////////////////////////////////
// // 45. *****************CODING CHALLENGE #3*****************
/*
compare BMIs of Mark and John using objects
BMI = mass/height ** 2
John Smith and Mark Miller 
*/

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () { //no paramters, taking data directly from the object
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI(); john.calcBMI();
const fatter = (john.calcBMI > mark.calcBMI) ?
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`) :
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);


//*******************************************************
// // *****************46. Iteration: The for Loop*****************
//a Loop is a Control Structure - fundamental to automating repetitive tasks. 

//we will assign the initial value of the counter to a variable inside () - must be let because it will be updated by the for loop!!
//separate by semicolon - then, add the logical condition evaluted befor each iterartion fo the loop is executed
//for loop keeps running while condition is TRUE

//for(initial value of counter; logical condition to run loop, increase the value of the counter)
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetitation ${rep} 💪`)
};
//*******************************************************
// // *****************47. Looping Arrays, Breaking and Continuing*****************
const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];


const types = [];
for (let i = 0; i < jonasArray.length; i++) {
    //reading from array
    console.log(jonasArray[i], typeof jonasArray[i]);
    //filling types array
    types.push([typeof jonasArray[i]])
    // types[i] = typeof jonasArray[i]; //or this
}

console.log(types);


const birthYears = [1996, 1989, 1955, 2007];
const allAges = [];
for (let i = 0; i < birthYears.length; i++) {
    allAges.push(2020 - birthYears[i])
}
console.log(allAges);

//********continue and break********
//CONTINUE = exit the current iteration of the loop and continue to the next one
//BREAK = completely terminate the whole loop
console.log('--- ONLY STRINGS (CONTINUE IF NOT A STRING) ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'strings')
        continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number')
        break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

//*******************************************************
// // *****************48. Looping Backwards and Loops in Loops*****************

// 0, 1, ..., 4
// 4, 3, ..., 0
console.log(`--- Looping Backwards ---`)
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i])
}

//gym reps, 3 exercises, each w 5 reps. 
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise: ${exercise}: --- rep ${rep}🏋️‍♀️`);
    }
}
//*******************************************************
// // *****************49. The While Loop*****************
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lighting weights repetition ${rep}🧨`);
    rep++;
}
//while loop is more versatile because it doesn't need a counter. e.g.: a random variable
//roll a dice until we roll a 6.

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end... you rolled a ${dice}`);
    }
}

// ////////////////////////////////////////////////////////////
// // 50. *****************CODING CHALLENGE #4*****************
/*
improved tip calcultor
*/

const bells = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let teps = [];
let tatals = [];

function calcTips(bell) {
    return bell >= 50 && bell <= 300 ? bell * .15 : bell * .20;
}

for (let i = 0; i < bells.length; i++) {
    let tep = calcTips(bells[i]);
    teps.push(tep);
    tatals.push(bells[i] + teps[i]);
    console.log(`Bell: ${bells[i]} Tep: ${tep} Total: ${tatals[i]} `);
}
console.log(bells, teps, tatals);

//BONUS

function calculateAverage(anyArray) {
    let sum = 0;
    for (let i = 0; i < anyArray.length; i++) {
        sum += anyArray[i];
    }
    return sum / anyArray.length;
};

console.log(`Average Tatal: ${calculateAverage(tatals)}`);
console.log(`Average Teps: ${calculateAverage(teps)}`);
