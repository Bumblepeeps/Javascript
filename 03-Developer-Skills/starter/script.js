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
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`Maximum: ${max} Minimum: ${min}`);
  return max - min;
};
// A) IDENTIFY BUG
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
//FYI, bug not fixed.
