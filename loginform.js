const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelector('.error-message'); 

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  if (usernameInput.value.trim() === '') {
    errorMessage.textContent = 'Please enter your username.';
    isValid = false;
  }

  if (passwordInput.value.trim() === '') {
    errorMessage.textContent = 'Please enter your password.';
    isValid = false;
  }

  if (isValid) {
  
    form.submit();
  } else {
   
    errorMessage.style.display = 'block';
  }
});

