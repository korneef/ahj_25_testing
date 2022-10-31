import cardValidator from './cardValidator';

function cardIssuerCheck() {
  const inputValue = document.getElementsByClassName('card-validator__input')[0].value;
  if (cardValidator(inputValue)) {
    document.getElementsByClassName('card-validator__chek-status')[0].textContent = '✅ Карта валидна';
  } else {
    document.getElementsByClassName('card-validator__chek-status')[0].textContent = '❌ Карта невалидна';
  }
}

const buttonCheckCard = document.getElementsByClassName('card-validator__button')[0];
if (buttonCheckCard) {
  buttonCheckCard.addEventListener('click', cardIssuerCheck);
}

const inputCardNumber = document.getElementsByClassName('card-validator__input')[0];
if (inputCardNumber) {
  inputCardNumber.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      cardIssuerCheck();
    }
  });
}
