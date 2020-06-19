import {
  checkCardNumber
} from "./checkCardNumber";

const input = document.querySelector('input');
const checkButton = document.querySelector('button');

const renderResult = () => {
  const cardCompany = checkCardNumber(input.value);
  console.log(cardCompany);
}

checkButton.addEventListener('click', renderResult);