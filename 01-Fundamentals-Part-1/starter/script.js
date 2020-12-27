//***********************************************************************
// *****************10. VALUES & VARIABLES*****************
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// a value is a piece of data, the most fundamental piece of data in programming

console.log('jonas');
console.log(23);

let instructorName = 'Honas'
console.log(instructorName + " is " + js);
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
//***********************************************************************
// *****************12. DATA TYPES*****************
let jsIsFun = true
console.log(jsIsFun)

console.log(typeof true)
console.log(typeof jsIsFun)
console.log(typeof 23)
console.log(typeof instructorName)

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

//***********************************************************************
// // *****************13. DECLARATION TYPES let, const, var*****************
// // let - declares variables that will later be reassigned or mutated
let age = 30
age = age + 1
console.log(age)

const yrBorn = 1991
// yrBorn = 1990 
//results in Error: Assignment to constant variable. *cannot assign a new value to a const. They are immutable. 
// const myJob; 
// will result in Error: Missing initializer in const declaration. *cannot delcare empty

/*
use const by default and only use let when you're sure the variable will be changed
changing variables creates more bug potential. 
*/

// var is old way of delcaring variables prior to ES6. never use var
var myJob = 'programmer'
myJob = 'teacher'
console.log(myJob)

// you COULD do this but don't because it doesn't define the variable within the proper scope.
instructorLastName = 'Schmedtman'
console.log(instructorLastName)


//***********************************************************************
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

//***********************************************************************
//***************** 15. OPERATOR PRECEDENCE*****************
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

let a, b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(a, b);
//subtraction has higher precedence than assignment.
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

console.log(ageJonas, ageSara);
const averageAge = (ageJonas + ageSara) / 2 //parenth calcs first
console.log(averageAge)

/////////////////////////////////////////////////////////////////
// *****************16. CODING CHALLENGE #1*****************

// // DATA SET 1:
// let Mark = {
//     height: 1.69,
//     mass: 78
// }
// let John = {
//     height: 1.95,
//     mass: 92
// }

// DATA SET 2:
Mark = {
    height: 1.88,
    mass: 95
}
John = {
    height: 1.76,
    mass: 85
}

console.log('When Mark weighs ' + Mark.mass + 'kg and is ' + Mark.height + 'm tall,');
console.log('And John weighs ' + John.mass + 'kg and is ' + John.height + 'm tall,');

let MarkBMI = Mark.mass / Mark.height ** 2;
let JohnBMI = John.mass / John.height ** 2;

console.log("Mark's BMI is " + MarkBMI + " and John's BMI is " + JohnBMI + ". So, is Mark's BMI greater than John's?");
console.log(markHigherBMI = MarkBMI > JohnBMI);
//***********************************************************************
// // *****************17. STRINGS AND TEMPLATE LITERALS*****************
const hisName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currYear = 2037;
const jonas = "He's " + hisName + ', a ' + (currYear - birthYear) + '-year-old ' + job + "!";
console.log(jonas);
//this is made easier with template literals. Backticks (shift + tilde) indicate a literal
const jonasNew = `He's ${hisName}, a ${currYear - birthYear}-year-old ${job}!`;
console.log(jonasNew);
console.log(`Just a normal string...`); //can pretty much always use backticks so you don't have to think about which kind of quotes to use. 
console.log('Just a normal \n\ multi - line \n\ string');
console.log(`With backticks,  
for multi-line string
just hit enter!`);
//***********************************************************************
// // *****************18. TAKING DECISIONS: IF / ELSE STATEMENTS*****************

const howOld = 15;
const isOldEnough = howOld >= 18;
if (isOldEnough) {
    console.log('You can start driving! 🚗')
} else {
    const yearsLeft = 18 - howOld;
    console.log(`Sorry, you can't drive. 🛑 But you only have ${yearsLeft} years left!`)
}

//if/else statements are one type of CONTROL STRUCTURE : controls which blocks of code are executed (e.g. only if true, run this code)

const yearBorn = 2012;
let century;

if (yearBorn <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// if (condition) {
//     code that executes if condition is true
// } else {
//     code that executes if condition is false
// }

// /////////////////////////////////////////////////////////////////
// // 19. *****************CODING CHALLENGE #2*****************

//requires one of the data sets from challenge #1 to be uncommented. 
if (markHigherBMI = MarkBMI > JohnBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`)
} else {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})`)
}
//***********************************************************************
// // *****************20. TYPE CONVERSION AND COERCION*****************
//back to value types... types are fundamenal, conversion between types is common, string > number or # > boolean
//conversion manually convert, vs coercion is js auto-converting type behind the scenes, implicitly
//////////CONVERSION
//input on page for user to input birthyear. 
const inputYear = '1991';
console.log(inputYear + 18); //199118, because inputYear is a string
console.log(Number(inputYear)); //1991
console.log(Number(inputYear) + 18); //properly calcs 2009
console.log(Number('What a String'));//NaN
console.log(typeof NaN); //NaN is a number, it's just an invalid number.
console.log(String(23));//logs as string
//////////COERCION
//type coercion happens when an operator is dealing with two values of diff types. JS will coerce the value types to match so the operation can be executed. 
console.log('I am ' + 31 + ' years old') //here, 23 gets coerced to a string, same happens in template literals. ``
//we don't have to say String(23) because js coerces. 

console.log('23' - '10' - 3);//minus operator coerces in the other direction, from string to number. Changing these to plus results in 23103.
console.log('23' * '2');//converted to numbers to make multiplier operator work. Same with division.

//LOGICAL OPERATOR
console.log('23' > '18');//true, comparison works as strings are coerced into numbers

let n = '1' + 1; //becomes 11 the string
n = n - 1;//coerces to number
console.log(n);//10

//***********************************************************************
// // *****************21. TRUTHY AND FALSY VALUES*****************
//falsey values are not false, but will become false when we try to convert to boolean. 
//in js there are only 5 falsey values: 0, '', undefined, null, NaN
//any other number or string will be true upon conversion to boolean
console.log(Boolean(23));//true
console.log(Boolean('astring'));//true
console.log(Boolean(''));//false
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false
console.log(Boolean({}));//true -- empty object

const money = 0;
if (money) { //js will convert this to a boolean because it's in an if/else, will make it falsey
    console.log("You got some dough ;)")
} else {
    console.log("You broke! :(")
}

let ice; //no value assigned, so it's unassigned. unassigned is a falsey value.
if (ice) {//when converted to a boolean
    console.log('Oh neat - Ice is defined!')
} else { //the else statement is triggered by the falsey value
    console.log('ice cold baby. not defined.')
}
//***********************************************************************
// // *****************22. EQUALITY OPERATORS == vs. ===*****************
//checking to see if two values are equal
const ageZilla = '18';
if (ageZilla === 18) {
    console.log('Welcome to adulthood! (strict)')
}
if (ageZilla == 18) {
    console.log('Welcome to adulthood! (loose)')
}
// = assignment // === strict comparison (will not coerce) // == loose comparison (coerces)
//avoid loose equality operators because it can cause hard to find bugs. 

// const favorite = Number(prompt("What's your favorite number?"));//converts input to number
// console.log(favorite);
// console.log(typeof favorite);//string

// if (favorite === 23) {
//     console.log("Cool! 23 is great!");
// }//only works w strict operator because we converted the input text to number. This is best practice, rather than relying on loose operator. 
// else if (favorite === 7) {
//     console.log('7 is cool')
// } else {
//     console.log('Well okay, that is a number, at least')
// }
// // !== strict // != loose //always use strict, again.
// if (favorite !== 23) {
//     console.log('Why not 23?')
// }

//***********************************************************************
// // *****************23. BOOLEAN LOGIC*****************
//boolean logic is a branch of computer science that uses true and false values to solve complex logical problems. // AND // OR // NOT

const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah could drive us!")
// } else {
//     console.log("Someone else should drive...")
// }

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah could drive us!")
} else {
    console.log("Someone else should drive...")
}

// /////////////////////////////////////////////////////////////////
// // 25. *****************CODING CHALLENGE #3*****************

//test data --- No one wins.
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
//test data bonus 1 --- Koalas Win!!!
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
//test data bonus 2 --- DRAW!!!
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;
const dolphinsAverage = 99;
const koalasAverage = 99;
console.log('Dolphins: ' + dolphinsAverage + ', Koalas: ' + koalasAverage);

if (dolphinsAverage < 100 && koalasAverage < 100) {//minimum score of 100
    console.log('No one wins.😭')
} else if (dolphinsAverage > koalasAverage) {//if dolphins score is greater than koalas
    console.log('Dolphins win! 🏆 🐬')
} else if (dolphinsAverage < koalasAverage) {
    console.log('Koalas win! 🏆 🐨')
} else if (dolphinsAverage === koalasAverage) {//if scores are equal
    console.log('Draw! Both win trophy.🏆🏆')
}
//***********************************************************************
// // *****************26. SWITCH STATEMENT*****************
//like a simplified if else in which a single value is compared against multiple options. 

const day = 'friday';
switch (day) {
    case 'monday': // day === 'monday' // strict comparison
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day.')
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Not a valid day!')
}

//***********************************************************************
// // *****************27. EXPRESSIONS AND STATEMENTS*****************

//EXPRESSION is a piece of code that produces a value
3 + 4
2000
true && false && !false

//STATEMENT is a bigger piece of code that is executed and does not produce a value by itself
if (23 > 10) {
    const str = '23 is bigger';
}//doesn't produce a value, only declares a variable called 'str'

//like sentences, a declaration is a sentence / statement, and the expressions are the words that make up the sentence / statement. ends in a semicolon. 

//JS expects statements and expressions in diff places, e.g. in a template literal, you can only have expressions, not statements. 
console.log(`I'm ${2020 - 1989} years old.`)//cannot insert an if statement inside this template literal.

//***********************************************************************
// // *****************28. CONDITIONAL (TERNARY) OPERATOR*****************
