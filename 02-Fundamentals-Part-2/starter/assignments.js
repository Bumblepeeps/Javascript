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
let percentage;
function percentageOfWorld1(population) {
    let percentage = population / worldPopulation * 100;
    return percentage;
};
England = percentageOfWorld1(55900000);
SouthAfrica = percentageOfWorld1(58560000);
Finland = percentageOfWorld1(6000000);

console.log(`England: ${England}%`);
console.log(`SouthAfrica: ${SouthAfrica}%`);
console.log(`Finland: ${Finland}%`);
// percentageOfWorld2(population)
