'use strict';

const numberElement = document.querySelector('#number');
const buttonElement = document.querySelector('.button');
const resultElement = document.querySelector('.result');
const counterElement = document.querySelector('.counter');
let counter = 0;

function printCounter () {
    counterElement.innerHTML = counter;
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
console.log('Random number =>', randomNumber);

function handleButtonClick(event) {
    event.preventDefault();
    const inputNumber = parseInt(numberElement.value);
    console.log('Número seleccionado =>', inputNumber);

    if (inputNumber === randomNumber) {
        resultElement.innerHTML = "HAS GANADO, CAMPEONA!";
    } else if (inputNumber > randomNumber) {
        resultElement.innerHTML = "demasiado alto";
    } else {
        resultElement.innerHTML = "demasiado bajo";
    }

    counter = counter + 1;
    printCounter();
}
buttonElement.addEventListener('click', handleButtonClick);
printCounter();


