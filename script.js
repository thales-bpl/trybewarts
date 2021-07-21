const btn = document.querySelector('#btn');
const login = document.querySelector('#login');
const password = document.querySelector('#senha');
const submitBtn = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement:checked');

function btnClick() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btn.addEventListener('click', btnClick);

function prevent(evento) {
  if (agreementCheck.value === 'null') {
    evento.preventDefault();
  }
}

submitBtn.addEventListener('click', prevent);
