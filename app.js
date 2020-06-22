import {
  checkCardNumber
} from "./checkCardNumber";

const input = document.querySelector('input');
const logo = document.querySelector('.logo');
const checkButton = document.querySelector('button');
const manualWindow = document.querySelector('.app-manual');
const finalResultWindow = document.querySelector('.result-window');

const renderResult = () => {
  try {
    const cardCompany = checkCardNumber(input.value);
    finalResultWindow.innerText = cardCompany;
    console.log(cardCompany);
  } catch (error) {
    finalResultWindow.innerText = error.message;
  }
}
const appVisualEffects = () => {
  manualWindow.classList.add('makeResultWindow');
  manualWindow.classList.add('monochrome-manual');
  finalResultWindow.classList.add('colorizeFrames');
  checkButton.classList.add('colorizeFrames');
  logo.classList.add('logo-active');
  input.classList.add('colorizeFrames')
}
const manualVisualEffects = () => {
  manualWindow.classList.remove('makeResultWindow');
  manualWindow.classList.remove('monochrome-manual');
  finalResultWindow.classList.remove('colorizeFrames');
  checkButton.classList.remove('colorizeFrames');
  logo.classList.remove('logo-active');
  input.classList.remove('colorizeFrames')
}

checkButton.addEventListener('click', renderResult);
checkButton.addEventListener('click', appVisualEffects);
manualWindow.addEventListener('click', manualVisualEffects);