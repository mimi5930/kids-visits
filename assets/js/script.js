// DOM elements
const form = document.getElementById('contact-form'),
  emailInput = document.getElementById('email-input'),
  textInput = document.getElementById('text-submit'),
  emailError = document.getElementById('invalid-text'),
  nameInput = document.getElementById('name-input'),
  successAlert = document.getElementById('success-alert'),
  dangerAlert = document.getElementById('danger-alert')

async function handleFormSubmit(event) {
  let isEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  let { classList: emailClassList } = emailInput,
    { classList: emailInputClassList } = emailInput,
    { classList: textInputClassList } = textInput
  event.preventDefault()
  // reset classLists
  emailInput.classList.remove('is-invalid', 'is-valid')
  textInput.classList.remove('is-invalid', 'is-valid')
  // validate email input
  if (!emailInput.value) {
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
  if (!textInput.value) {
    textInputClassList.add('is-invalid')
    return
  } else {
    textInputClassList.add('is-valid')
  }

  dangerAlert.classList.remove('visually-hidden')

  // submit form
  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/57875ae7624d79ca51cbb710062a4b69',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({
          name: nameInput.value || 'name not provided',
          email: emailInput.value,
          text: textInput.value
        })
      }
    )

    if (response.ok) {
      successAlert.classList.remove('visually-hidden')
    }
  } catch (error) {
    dangerAlert.classList.remove('visually-hidden')
    console.log(error)
  }
}

form.addEventListener('submit', handleFormSubmit)
