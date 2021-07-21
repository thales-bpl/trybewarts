const btn = document.querySelector('#btn');
const login = document.querySelector('#login');
const password = document.querySelector('#senha');

function btnClick() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btn.addEventListener('click', btnClick);
