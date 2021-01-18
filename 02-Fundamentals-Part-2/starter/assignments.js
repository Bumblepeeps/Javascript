console.log(`*****PART 2 ASSIGNMENTS*****`);
console.log(`**Functions:**`)

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people. Its capital is ${capitalCity}.`;
}

let Finland = describeCountry('Finland', 6000000, 'Helsinki');
let SouthAfrica = describeCountry('South Africa', 58560000, 'Cape Town');
let England = describeCountry('England', 55900000, 'London');

console.log(Finland);
console.log(SouthAfrica);
console.log(England);

console.log(`**Function Declarations vs Expressions:**`);

let worldPopulation = 7800000000;

function percentageOfWorld1(population) {
    return population / worldPopulation * 100;
};
England = percentageOfWorld1(55900000);
SouthAfrica = percentageOfWorld1(58560000);
Finland = percentageOfWorld1(6000000);

console.log(`Declaration England: ${England}%`);
console.log(`Declaration SouthAfrica: ${SouthAfrica}%`);
console.log(`Declaration Finland: ${Finland}%`);
// percentageOfWorld2(population)
const percentageOfWorld2 = function (population) {
    return population / worldPopulation * 100;
};
England = percentageOfWorld2(55900000);
SouthAfrica = percentageOfWorld2(58560000);
Finland = percentageOfWorld2(6000000);
console.log(`Expression England: ${England}%`);
console.log(`Expression SouthAfrica: ${SouthAfrica}%`);
console.log(`Expression Finland: ${Finland}%`);

console.log(`**Arrow Functions:**`);

let percentageOfWorld3 = (population) => {
    return population / worldPopulation * 100;
}
Japan = percentageOfWorld3(55900000);
console.log(`Arrow Function - Japan: ${Japan}%`);




console.log(`**Functions Calling Other Functions:**`);
const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} people, which is about ${percentage}% of the world.`
    console.log(description);
}
describePopulation('Canada', 37590000);
describePopulation('Ukraine', 74895);
describePopulation('Mexico', 74854895);



console.log(`**Introduction to Arrays:**`);
