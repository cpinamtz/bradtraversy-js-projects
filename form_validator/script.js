const submitButton = document.getElementById("submit-button");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("psswd-input");
const passwordConfirmInput = document.getElementById("psswd-confirm-input");

const MIN_PASSWORD_LENGTH = 5;
const MAX_PASSWORD_LENGTH = 15;

function handleClickSubmitButton() {
  const requiredInputs = [emailInput, passwordInput, passwordConfirmInput];
  checkRequired(requiredInputs);
}

function checkRequired(inputs) {
  for (let index = 0; index < inputs.length; index++) {
    const inputElement = inputs[index];
    const errorMessageElement =
      inputElement.nextElementSibling.nextElementSibling;
    if (inputElement.value === "") {
      inputElement.classList.add("invalid-input");
      showElement(errorMessageElement);
    } else {
      inputElement.classList.remove("invalid-input");
      hideElement(errorMessageElement);
    }
    if (inputElement.id === "psswd-input") {
      checkLength(inputElement);
    }
    if (inputElement.id === "email-input") {
      checkEmail();
    }
    if (inputElement.id === "psswd-confirm-input") {
      checkPasswordsMatch();
    }
  }
}

function checkEmail() {
  const regExpression = /\w+@\w+.(com|es)/;
  const result = regExpression.exec(emailInput.value);
  const notEmailRegexErrorMessage = document.getElementsByClassName(
    "not-email-regex-input-error-message"
  )[0];
  console.log(result);
  if (result === null) {
    showElement(notEmailRegexErrorMessage);
  } else {
    hideElement(notEmailRegexErrorMessage);
  }
}

function checkPasswordsMatch() {
  const passwordsNotMatchErrorMessage = document.getElementsByClassName(
    "match-password-error-message"
  )[0];
  if (passwordInput.value === passwordConfirmInput.value) {
    hideElement(passwordsNotMatchErrorMessage);
  } else {
    showElement(passwordsNotMatchErrorMessage);
  }
}

function checkLength(input) {
  const minLengthPasswordErrorMessage = document.getElementsByClassName(
    "min-length-password-error-message"
  )[0];
  const maxLengthPasswordErrorMessage = document.getElementsByClassName(
    "max-length-password-error-message"
  )[0];
  if (input.value.length < MIN_PASSWORD_LENGTH) {
    hideElement(maxLengthPasswordErrorMessage);
    showElement(minLengthPasswordErrorMessage);
  } else if (input.value.length > MAX_PASSWORD_LENGTH) {
    hideElement(minLengthPasswordErrorMessage);
    showElement(maxLengthPasswordErrorMessage);
  } else {
    hideElement(minLengthPasswordErrorMessage);
    hideElement(maxLengthPasswordErrorMessage);
  }
}

// Util functions
function showElement(element) {
  element.classList.add("displayable");
}

function hideElement(element) {
  element.classList.remove("displayable");
}

submitButton.addEventListener("click", handleClickSubmitButton);
