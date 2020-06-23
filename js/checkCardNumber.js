import {
  cardsData
} from "./cardsData"

const checkCardNumber = (inputUserNumber) => {
  if (inputUserNumber.length !== 0 && !parseInt(inputUserNumber)) throw new Error('use only digitals!');
  if (inputUserNumber === '') throw new Error('empty input');

  const inputValueToCalculation = prepareInputValueToCalculation(inputUserNumber);
  const isValidLuhnAlgorithm = checkLuhnAlgorithm(inputValueToCalculation);
  const cardCompany = checkCardCompany(inputUserNumber);
  if (isValidLuhnAlgorithm && cardCompany) {
    return cardsData[cardCompany].name;
  } else {
    invalidInputValue();
  }
}

function prepareInputValueToCalculation(inputUserNumber) {
  const userNumberArrayDigitals = inputUserNumber.match(/[0-9]/g);
  return userNumberArrayDigitals.reverse();
}

function checkLuhnAlgorithm(inputValueToCalculation) {
  let sum = 0;

  inputValueToCalculation.forEach((number, index) => {
    const digit = parseInt(number);
    if (index % 2) {
      let calculateValue = digit * 2
      sum += calculateValue < 10 ? calculateValue : calculateValueGreaterThan10(calculateValue)
    } else {
      sum += digit;
    }
  })
  return sum % 10 === 0 ? true : false;
}

function calculateValueGreaterThan10(value) {
  const separateDigits = String(value).split('');
  return separateDigits.reduce((sum, nextDigit) => sum + parseInt(nextDigit), 0);
}

function invalidInputValue() {
  throw new Error('invalid card number!');
}

function checkCardCompany(cardNumber) {
  let finalResult = "";
  for (const company of Object.keys(cardsData)) {
    const lengthCondition = checkLength(cardNumber, company);
    const beginingCondition = checkBegining(cardNumber, company);
    if (lengthCondition && beginingCondition) {
      finalResult = company;
    }
  }
  return finalResult;
}

function checkLength(cardNumber, company) {
  let result = false;

  for (const length of cardsData[company].lengths) {
    if (cardNumber.length === length) {
      result = true;
      break;
    }
  }
  return result;
}

function checkBegining(cardNumber, company) {
  let result = false;

  for (const firstNumbers of cardsData[company].beginings) {
    if (cardNumber.startsWith(firstNumbers)) {
      result = true;
      break;
    }
  }
  return result;
}

export {
  checkCardNumber
};