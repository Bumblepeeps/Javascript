// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
//Dev Skills Notes
const cl = console.log();
/*settings
Auto Save - onFocusChange
Multi Cursor Modifier - alt
Word Wrap - on
Format On Save - checked
*/

/*extensions
Monokai Pro
Auto Close Tag
Auto Rename Tag
ESLint
Image preview
Settings Sync
TODO highlight
Live Server

/*installs
node.js
run: node -v
run: npm install live-server -g
run: live-server
*/

// 57. Learning How to Code
/*
Set a Goal: I want to become a front-end web developer within 1 year. I want to find a better job. 
Imagine a big project: How about a web-based capacity calculator - idea written in yellow notepad.
Everything is awesome, Cliff of confusion, Pit of despair, back to awesome, competence.
Write code on your own, do mini projects. 
Learn with other people and share progress.
Keep challenging yourself. 
*/
// 58. How to think like a dev: problem solve!
///////////////////////////////////////
// 59. Using Google, StackOverflow and MDN

/*



// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`Maximum: ${max} Minimum: ${min}`);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`Maximum: ${max} Minimum: ${min}`);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Developer Skills & Editor Setup';
///////////////////////////////////////
// 61. Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX BUG: convert string to number
    // value: Number(prompt('Enter degrees celsius:')),
    value: 10,
  };
  // B) FIND BUG: saw that value was a string
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY BUG
console.log(measureKelvin());

//USING A DEBUGGER FOR BIGGER BUG ************************************************
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     // debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(`Maximum: ${max} Minimum: ${min}`);
//   return max - min;
// };
// // A) IDENTIFY BUG
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);
// //FYI, bug not fixed.

///////////////////////////////////////
// 62. CODING CHALLENGE #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*Understanding the problem:
 Need to have an array of temperatures (of any length) print into a sentence the temp and day (starting with day 1)
Print the forecast as one string.


Breaking it into subproblems:
1. create Array
2. Transform the Array to a single String
3. Transform each element to a string with °C Alt + 0176 at the end. 
4. String needs to contain day (index+1)
5. Add ... between elements  and start and end of it
*/

let data1 = [17, 21, 23, -1];
let data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `It is ${arr[i]}°C on day ${i + 1} ... `;
  }
  console.log(`... ` + str);
}
printForecast(data1);
printForecast(data2);
