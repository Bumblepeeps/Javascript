//***********************************************************************
// Part 1 Assignments
console.log(`-------------------------------START OF PART 1 ASSIGNMENTS----------`)
console.log('assignment : Values and Variables');

const country = 'The United States'
const continent = 'North America'
let population = 331949138;
//331949138
console.log(country + " is in " + continent + " - population: " + population);

console.log('assignment : Data Types');
const isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

console.log('assignment : let, const and var');
language = 'English';

console.log('assignment : Basic Operators');
let halfPopulation = population / 2;
let babyBorn = ++population;
console.log(`population is ${babyBorn}`);
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
if (language === 'English' && population > 50000000 && !isIsland) {
    console.log(`You should live in ${country}!`)
} else {
    console.log(`${country} does not meet your criteria`)
}


console.log('assignment : the Switch Statement');
switch (language) {
    case 'English':
        console.log(`third place`);
        break;
    case 'Mandarin':
    case 'Chinese':
        console.log(`MOST number of native speakers`);
        break;
    case 'Spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'Hindi':
        console.log(`Number 4`);
        break;
    case 'Arabic':
        console.log(`5th most spoken lanauge`);
        break;
    default:
        console.log(`Great language too :D`)
}

console.log('assignment : The Conditional (Ternary) Operator');
const aboveorbelow = (population > 33000000) ? `above` : `below`;
console.log(`${country}' population is ${aboveorbelow} average.`);
console.log(`------------------------THIS IS THE END OF PART 1 ASSIGNMENTS----------`)