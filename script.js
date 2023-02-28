let submit = document.querySelector('#btn');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let checkbox = document.querySelector('#custom-checkbox');

let errorEmail = document.querySelector('#error-email');
let errorPassoword = document.querySelector('#error-password');
let errorCheckbox = document.querySelector('#error-checkbox');

let emailData = '';
let passwordData = '';
let checkboxData = '';
let userData = {};

email.addEventListener('input', (event) => {
  emailData = event.target.value;
})

password.addEventListener('input', (event) => {
  passwordData = event.target.value;
})

checkbox.addEventListener('input', (event) => {
  checkboxData = event.target.checked;
})

function validateEmail(emailData) {    
  const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
  return re.test(String(emailData).toLowerCase());
}

submit.addEventListener('click', (event) => {
  event.preventDefault();

  if (emailData == '') {
    errorEmail.innerHTML = 'Поле обязательно для заполнения';
  } else if (validateEmail(emailData) == false) {
    errorEmail.innerHTML = 'Email невалидный';
  } else {
    errorEmail.innerHTML = '';
    userData.email = emailData;
  }

  if (passwordData == '') {
    errorPassoword.innerHTML = 'Поле обязательно для заполнения';
  } else if (passwordData.length < 8) {
    errorPassoword.innerHTML = 'Пароль должен содержать как минимум 8 символов';
  }
  else {
    errorPassoword.innerHTML = '';
    userData.password = passwordData;
  }

  if (checkboxData == '') {
    errorCheckbox.innerHTML = 'Поле обязательно для заполнения';
  } else {
    errorCheckbox.innerHTML = '';
  }

  if ((emailData != '' && validateEmail(emailData) != false) && (passwordData != '' && passwordData.length > 8)) {
    console.log(userData)
  }
})