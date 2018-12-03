'use strict';

const numberElement = document.querySelector('#number');
const buttonElement = document.querySelector('.button');
const resultElement = document.querySelector('.result');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

let randomNumber = getRandomNumber(100); 
console.log(getRandomNumber(100));

function handleButtonClick() {
    const inputNumber = parseInt(numberElement.value);

    if (randomNumber === inputNumber) {
        resultElement.innerHTML = "HAS GANADO, CAMPEONA!";
    } else if (inputNumber > randomNumber) {
        resultElement.innerHTML = "demasiado alto";
    } else {
        resultElement.innerHTML = "demasiado bajo";
    }
}
buttonElement.addEventListener('click', handleButtonClick);



