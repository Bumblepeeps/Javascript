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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// * 20 makes decimal between 0 and 1 = numbers between 0 and 20, then +1 to ensure no 0s.
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  /* 74. Implementing the Game Logic */
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //When there is no input (or 0)
    document.querySelector('.message').textContent = '🔞 No Number! ';
  } else if (secretNumber === guess) {
    //When player wins
    document.querySelector('.message').textContent = `Yes - that's correct! 👌`;
    // 75. Manipulating CSS Styles
    //change the backgroundColor and width of number
    //use style property
    //target css property with camelCase
    //value must always be a string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    //when guess is too high

    if (score > 1) {
      document.querySelector('.message').textContent = `Too High! 📈`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥You Lose!!!!`;
    }
  } else if (guess < secretNumber) {
    //when guess is too low

    if (score > 1) {
      document.querySelector('.message').textContent = `Too Low! 📉`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥You Lose!!!!`;
    }
  }
});
