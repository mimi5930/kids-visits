// Bootstrap Data Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const textInput = document.getElementById('text-submit');

function handleFormSubmit(event) {
  event.preventDefault();
  // reset classLists
  emailInput.classList.remove('is-invalid', 'is-valid');
  textInput.classList.remove('is-invalid', 'is-valid');
  // validate email input
  if (emailInput.value === '') {
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
