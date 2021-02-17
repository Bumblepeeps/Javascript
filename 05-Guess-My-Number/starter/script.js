'use strict';
//PROJECT 1 INTRO: GUESS MY NUMBER!
console.log(document.querySelector('.message').textContent);
//DOM MANIPULATION NOTES
/* Notes *********************
- Document Object Model

structured representation of html docs. DOM is connection point between HTML and JS. 
DOM automatically created by browser - stored in tree stucture. 
document.querySelector() is a DOM thing, not a JS thing. 

DOM and DOM methods are part of Web APIs
 - Web API: libraries that browsers implement, accessible by our JS, and also written in JS. 
 - Web APIs contain: DOM & DOM methods, Fetch API, Timers... etc.

API = Application Programming Interface
official DOM specification browsers implement, means DOM manipulation works in all browsers. 
*/

///////////////////////////////////////////////
/* 72. Selecting and Manipulating Elements */
// document.querySelector('.message').textContent = 'Correct Number 😎';
// //secret number
// document.querySelector('.number').textContent = '22';
// //score
// document.querySelector('.score').textContent = 4;

// document.querySelector('.guess').value = 23; //set value to 23
// console.log(document.querySelector('.guess').value); //read value

///////////////////////////////////////////////
/* 73. Handling Click Events */
//event listener reacts
let randomNumber = 22;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🔞 No Number! ';
  }
});
