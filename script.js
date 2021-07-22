const btn = document.querySelector('#btn');
const login = document.querySelector('#login');
const password = document.querySelector('#senha');
const submitBtn = document.querySelector('#submit-btn'); // submit button
const agree = document.querySelector('#agreement'); // checkbox 'concordo'

function btnClick() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btn.addEventListener('click', btnClick);

function enableButton() {
  if (agree.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

agree.addEventListener('change', enableButton);
