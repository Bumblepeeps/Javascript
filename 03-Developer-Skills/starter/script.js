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

///////////////////////////////////////
// Using Google, StackOverflow and MDN

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
