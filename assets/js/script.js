// DOM elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const textInput = document.getElementById('text-submit');
const emailError = document.getElementById('invalid-text');

function handleFormSubmit(event) {
  let isEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  event.preventDefault();
  // reset classLists
  emailInput.classList.remove('is-invalid', 'is-valid');
  textInput.classList.remove('is-invalid', 'is-valid');
  // validate email input
  if (emailInput.value === '') {
    emailError.textContent = 'Please provide your email.';
    emailInput.classList.add('is-invalid');
    return;
  } else if (!isEmail.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('is-invalid');
    return;
  } else {
    emailInput.classList.add('is-valid');
  }

  // validate message input
  textInput.classList.remove('is-invalid');
  if (textInput.value === '') {
    textInput.classList.add('is-invalid');
    return;
  } else {
    textInput.classList.add('is-valid');
  }

  // submit form
  form.submit();
}

form.addEventListener('submit', handleFormSubmit);
