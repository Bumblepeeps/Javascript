//***********************************************************************
// Part 1 Assignments
console.log('assignment : Values and Variables');

const country = 'The United States'
const continent = 'North America'
let population = 331949138;
//331949138
console.log(country + " is in " + continent + " - population: " + population);

console.log('assignment : Data Types');
const isIsland = false;
let language;
console.log(isIsland, population, country, language);

console.log('assignment : let, const and var');
language = 'English';

console.log('assignment : Basic Operators');
let halfPopulation = population / 2;
let babyBorn = population + 1;
let greaterThanFinland = population > 5518000;
const avgPopulation = 33000000;
let greaterThanAvg = population > avgPopulation;
console.log(halfPopulation, babyBorn, greaterThanFinland, greaterThanAvg);
let description = (country + " is in " + continent + ", and it's " + population + ' people often speak ' + language);
console.log(description);

console.log('assignment : Strings and Template Literals');
description = (`Template Literal:
${country} is in ${continent}, and it's ${population} people often speak ${language}`);


console.log(description);


console.log('assignment : Taking Decisions - if/else statements');

if (greaterThanAvg) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${avgPopulation - population} below average.`)
}
console.log('assignment : Type Conversion and Coercion');
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

console.log('assignment : Equality Operators == vs ===');
// let numNeighbors = Number(prompt(`How many neighbor countries does your country have?`));
// if (numNeighbors === 1) {
//     console.log(`Only 1 border!`)
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }


console.log('assignment : Logical Operators');
//Sarah wants to live in a country that speaks english, has < 50 million ppl, and is not an island. 
if (language = 'English' && population > 50000000 && isIsland = "false") {
    console.log(`You should live in ${country}!`)
} else {
    console.log(`nope`)
}