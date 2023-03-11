let btnForm1 = document.querySelector('#btn-form1');
let btnForm2 = document.querySelector('#btn-form2');
let form1 = document.querySelector('#form__div2');
let form2 = document.querySelector('#form__div1');

let submit = document.querySelector('#btn');
let loginBtn = document.querySelector('#btn1');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let checkbox = document.querySelector('#custom-checkbox');
let loginEmail = document.querySelector('#email-login');
let loginPassword = document.querySelector('#password-login');

let errorEmail = document.querySelector('#error-email');
let errorPassoword = document.querySelector('#error-password');
let errorCheckbox = document.querySelector('#error-checkbox');
let loginErrorEmail = document.querySelector('#error-email-login');
let loginErrorPassword = document.querySelector('#error-password-login');

let emailData = '';
let passwordData = '';
let checkboxData = '';
let loginEmailData = '';
let loginPasswordData = '';
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

loginEmail.addEventListener('input', (event) => {
  loginEmailData = event.target.value;
});

loginPassword.addEventListener('input', (event) => {
  loginPasswordData = event.target.value;
});

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

  if (checkboxData == false) {
    errorCheckbox.innerHTML = 'Поле обязательно для заполнения';
  } else {
    errorCheckbox.innerHTML = '';
  }

  if ((emailData != '' && validateEmail(emailData) != false) && (passwordData != '' && passwordData.length > 8) && (checkboxData == true)) {
    // Сохранение в массив данных пользователей
    let data = JSON.parse(localStorage.getItem('data')) || [];
    
    // Проверка, есть ли email уже в массиве данных
    let existingUserIndex = data.findIndex(user => user.email === emailData);
    if (existingUserIndex !== -1) {
      // Обновление пароля если есть
      data[existingUserIndex].password = passwordData;
    } else {
      // Добавление нового пользователя в массив для последующей записи в дату
      data.push(userData);
    }
    
    // Запись обновленного массива данных обратно в локальное хранилище
    localStorage.setItem('data', JSON.stringify(data));

  }
})

// Проверка входа
loginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (loginEmailData == '') {
    loginErrorEmail.innerHTML = 'Поле обязательно для заполнения';
  } else if (validateEmail(loginEmailData) == false) {
    loginErrorEmail.innerHTML = 'Email невалидный';
  } else {
    loginErrorEmail.innerHTML = '';
  }

  if (loginPasswordData == '') {
    loginErrorPassword.innerHTML = 'Поле обязательно для заполнения';
  } else if (loginPasswordData.length < 8) {
    loginErrorPassword.innerHTML = 'Пароль должен содержать как минимум 8 символов';
  }else {
    loginErrorPassword.innerHTML = '';
  }

  // Проверка email и пароля
  let data = JSON.parse(localStorage.getItem('data')) || [];
  let existingUserIndex = data.findIndex(user => user.email === loginEmailData && user.password === loginPasswordData);
  if (existingUserIndex !== -1) {
    window.location.href = 'home.html';
  } else if ((existingUserIndex === -1) && (loginEmailData != '' && validateEmail(loginEmailData) != false) && (loginPasswordData != '' && loginPasswordData.length > 8)) {
    alert('Неверный email или пароль');
  }
});

btnForm1.addEventListener('click', (event) => {
  event.preventDefault();
  form1.style.display = 'block';
  form2.style.display = 'none';
});

btnForm2.addEventListener('click', (event) => {
  event.preventDefault();
  form1.style.display = 'none';
  form2.style.display = 'block';
});