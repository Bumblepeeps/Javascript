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
const populations = [37590000, 74895, 74854895, 3482];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]
console.log(percentages);

console.log(`**Basic Array Operations (Methods):**`);

const neighbors = ['Mexico', 'Canada', 'Pacific', 'Atlantic'];
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop('Utopia');
console.log(neighbors);

if (!neighbors.includes('Germany')) { // if array does not include Germany...
    console.log(`Probably not a central European country :D`);
}

console.log(neighbors.indexOf('Canada'));//log the index of Canada
neighbors[neighbors.indexOf('Canada')] = 'America'; //change the item at the index of Canada to America
console.log(neighbors);


console.log(`**Introduction to Objects:**`);
const myCountry = {
    country: 'America',
    capital: 'DC',
    language: 'English',
    population: 560987,
    neighbors: ['Mexico', 'Canada', 'Pacific', 'Atlantic'],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} ${this.language}-speaking people, with ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        this.checkIsland = (this.neighbors.length === 0) ? true : false;
    }
};


// console.log(`**Dot vs. Bracket Notation:**`);
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, with ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2000000;
console.log(myCountry.population);
myCountry['population'] -= 2000000;
console.log(myCountry.population);



console.log(`**Object Methods:**`);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry['checkIsland']);

console.log(`** Iteration: The for Loop:** `);
for (i = 1; i <= 12; i++) {
    console.log(`Voter ${i} is voting.`)
}


console.log(`** Looping Arrays, Breaking and Continuing:** `);

const population2 = [37590000, 74895, 74854895, 3482];
let percentage2 = [];
for (i = 0; i < population2.length; i++) {
    percentage2.push(percentageOfWorld1(population2[i]));
}

console.log(percentage2);



console.log(`** Looping Backwards and Loops in Loops:** `);
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];
console.log(listOfNeighbors);
/*Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway �
*/

for (i = 0; i < listOfNeighbors.length; i++) {

    for (c = 0; c < listOfNeighbors[i].length; c++) {
        console.log(`Neighbor: ${listOfNeighbors[i][c]}`);
    }
}

console.log(`** The while Loop:** `)

// const population2 = [37590000, 74895, 74854895, 3482];
// let percentage3 = [];
// while (i < population2.length) {
//     i++;
//     percentage3.push(percentageOfWorld1(population3[i]));
// }

// console.log(percentage3);
