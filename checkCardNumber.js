// import * as cardsData from './cardData.json';

// const financialCompaniesObject = {
//     masterCard: {},
//     americanExpress: {},
//     visa: {}
//   }

// const factory = () => {

//   return {}
// };
// const test = factory();
const input = document.querySelector('input');
const checkButton = document.querySelector('button');

class CardAttributes {
  constructor(name, lengths, beginings) {
    this.name = name;
    this.suitableLengths = lengths;
    this.suitableBeginings = beginings;
  }
}

const cardsData = { //może popróbować z JSON'em - spróbój z JSONem!!!
  visa: {
    name: 'Visa',
    lengths: [13, 16],
    beginings: [4],
  },
  masterCard: {
    name: 'Master Card',
    lengths: [16],
    beginings: [51, 52, 53, 54, 55]
  },
  americanExpress: {
    name: 'American Express',
    lengths: [15],
    beginings: [34, 37]
  }
}

const visa = new CardAttributes(...Object.values(cardsData.visa));
const cards = Object.keys(cardsData);

const financialCompaniesObjectName = ['masterCard', 'americanExpress', 'visa'];

checkButton.addEventListener('click', checkCardNumber);

function checkCardNumber() {
  const inputValueToCalculation = prepareInputValueToCalculation();
  const isValidLuhnAlgorithm = checkLuhnAlgorithm(inputValueToCalculation);
  if (isValidLuhnAlgorithm) {

  } else {
    invalidInputValue();
  }
  // 
  // return isValid;
}

function prepareInputValueToCalculation() {
  const inputUserNumber = input.value;
  const userNumberArrayDigitals = inputUserNumber.match(/[0-9]/g); //array of separated digits
  return userNumberArrayDigitals.reverse();
}

function checkLuhnAlgorithm(inputValueToCalculation) {
  let sum = 0;

  inputValueToCalculation.forEach((number, index) => { //Luhn's algorithm
    const digit = parseInt(number);
    if (index % 2) {
      let calculateValue = digit * 2
      sum += calculateValue < 10 ? calculateValue : calculateValueGreaterThan10(calculateValue)
    } else {
      sum += digit;
    }
  })
  console.log(sum % 10);

  return sum % 10 === 0 ? true : false;
}

function calculateValueGreaterThan10(value) {
  const separateDigits = String(value).split('');
  return separateDigits.reduce((sum, nextDigit) => sum + parseInt(nextDigit), 0);
}

function invalidInputValue() {
  console.log('Invalid number, try again!')
}