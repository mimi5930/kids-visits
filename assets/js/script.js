// DOM elements
const form = document.getElementById('contact-form'),
  emailInput = document.getElementById('email-input'),
  textInput = document.getElementById('text-submit'),
  emailError = document.getElementById('invalid-text')

function handleFormSubmit(event) {
  let isEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  let { classList: emailClassList } = emailInput,
    { classList: emailInputClassList } = emailInput,
    { classList: textInputClassList } = textInput
  event.preventDefault()
  // reset classLists
  emailInput.classList.remove('is-invalid', 'is-valid')
  textInput.classList.remove('is-invalid', 'is-valid')
  // validate email input
  if (emailInput.value === '') {
    emailError.textContent = 'Please provide your email.'
    emailClassList.add('is-invalid')
    return
  } else if (!isEmail.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.'
    emailClassList.add('is-invalid')
    return
  } else {
    emailInputClassList.add('is-valid')
  }

  // validate message input
  textInputClassList.remove('is-invalid')
  if (textInput.value === '') {
    textInputClassList.add('is-invalid')
    return
  } else {
    textInputClassList.add('is-valid')
  }

  // submit form
  form.submit()
}

form.addEventListener('submit', handleFormSubmit)
