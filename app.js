import {
  checkCardNumber
} from "./checkCardNumber";

const input = document.querySelector('input');
const checkButton = document.querySelector('button');
const manualWindow = document.querySelector('');

const renderResult = () => {
  const cardCompany = checkCardNumber(input.value);
  console.log(cardCompany);
}

const fadeOutManual = () => {
  manualWindow.classList.add('invisible')
}

checkButton.addEventListener('click', renderResult);
checkButton.addEventListener('click', fadeOutManual);