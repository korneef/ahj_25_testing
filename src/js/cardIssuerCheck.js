import cardIssuer from './cardIssuer';

function cardIssuerCheck(evt) {
  const inputValue = this.value.replace(/\D/g, '');
  this.value = inputValue;
  const allCard = Array.from(document.getElementsByClassName('card-validator__image'));

  if (evt.keyCode !== 13) {
    document.getElementsByClassName('card-validator__chek-status')[0].textContent = '';
  }

  for (let i = 0; i < allCard.length; i += 1) {
    allCard[i].style.opacity = 0.3;
  }

  const cardName = cardIssuer(inputValue);

  if (cardName) {
    document.getElementsByClassName(`card-container__${cardName}`)[0].style.opacity = 1;
  }
}

const inputCardNumber = document.getElementsByClassName('card-validator__input')[0];
if (inputCardNumber) {
  inputCardNumber.addEventListener('keyup', cardIssuerCheck);
}
