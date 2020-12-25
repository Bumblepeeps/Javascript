// *****************10. VALUES & VARIABLES
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

// *****************12. DATA TYPES
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


// // *****************13. DECLARATION TYPES let, const, var
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

