// *****************10. VALUES & VARIABLES*****************
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// a value is a piece of data, the most fundamental piece of data in programming

console.log('jonas');
console.log(23);

let firstName = 'Honas'
console.log(firstName + " is " + js);
/*
CONVENTIONS FOR VARIABLE NAMES
-camelCase yo.
-cannot start a variable name w/ a number: 3years
-cannot contain ampersand...
-acceptable: letters, numbers, underscores, dollar sign
-variables cannot be named using a reserved js keyword, such as 'new', 'function'
-do not start variable name with an Uppercase Letter, this is reserved for object-oriented programming
-true constant can be all uppercase, e.g. PI = 3.1415
-use descriptive variable names, 'myFirstJob' is better than 'job1'
*/

// *****************12. DATA TYPES*****************
let jsIsFun = true
console.log(jsIsFun)

console.log(typeof true)
console.log(typeof jsIsFun)
console.log(typeof 23)
console.log(typeof firstName)

jsIsFun = 'YES!'
//changing the value (don't need another let, it's already declared. )
console.log(typeof jsIsFun)
//checking the type of the new value

let year
console.log(year)//value is undefined
console.log(typeof year)//type is undefined too

year = 1991
console.log(year)//value is 1991
console.log(typeof year)//type is now number

console.log(typeof null)


// // *****************13. DECLARATION TYPES let, const, var*****************
// // let - declares variables that will later be reassigned or mutated
let age = 30
age = age + 1
console.log(age)

const birthYear = 1991
// birthYear = 1990 
//results in Error: Assignment to constant variable. *cannot assign a new value to a const. They are immutable. 
// const job; 
// will result in Error: Missing initializer in const declaration. *cannot delcare empty

/*
use const by default and only use let when you're sure the variable will be changed
changing variables creates more bug potential. 
*/

// var is old way of delcaring variables prior to ES6. never use var
var job = 'programmer'
job = 'teacher'
console.log(job)

// you COULD do this but don't because it doesn't define the variable within the proper scope.
lastName = 'Schmedtman'
console.log(lastName)



// *****************14. BASIC OPERATORS*****************
// operator allows us to transform or combine values (mathematical, comparison, assignment, logical, etc.)

//MATHEMATICAL OPERATORS:
const currentYear = 2081;
const ageRachel = currentYear - 1989;
const ageSarah = currentYear - 1996;
console.log(ageRachel, ageSarah);

console.log(ageRachel * 2, ageRachel / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3, or (2 * 2 * 2)
const firstName = 'Rachel';
const lastName = 'Liebman';
console.log(firstName + " " + lastName);
//operators are in RED when using this theme (monokai pro) - typeof is also an operator.

//ASSIGNMENT OPERATORS:
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //101
x--; //100
x--; //99
console.log(x);

//COMPARISON OPERATORS: --- produce boolean values
console.log(ageRachel > ageSarah); // asks the question, returns a boolean answer (>, <, >=, <=)
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(currentYear - 1989 > currentYear - 1996);


//***************** 15. OPERATOR PRECEDENCE*****************
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
//subtraction has higher precedence than assignment.
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSara = currentYear - 2018;

console.log(ageJonas, ageSara);
const averageAge = (ageJonas + ageSara) / 2 //parenth calcs first
console.log(averageAge)

