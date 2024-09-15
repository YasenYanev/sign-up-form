/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import "./styles/main.css";

const inputs = document.querySelectorAll("input");
const errMessage = document.querySelector(".formatErrorMsg");
const notEqualErrorMsg = document.querySelector(".notEqualErrorMsg");
const regExpresions = {
  text: /^[^A-Z]*[A-Z][^A-Z]*$/,
  email: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  tel: /^\d{3}-\d{3}-\d{4}$/,
};

function validateInputs(e) {
  const inputEL = e.target;
  if (regExpresions[inputEL.type].test(inputEL.value)) {
    inputEL.classList.remove("invalid-input");
    inputEL.classList.add("valid-input");
    return true;
  } else {
    inputEL.classList.remove("valid-input");
    inputEL.classList.add("invalid-input");
    return false;
  }
}

function validatePasswords(e) {
  const passwordInputs = [...inputs].filter(
    (input) => input.type === "password",
  );

  errMessage.classList.remove("active");
  notEqualErrorMsg.classList.remove("active");

  //   if (
  //     passwordInputs[0].value !== passwordInputs[1].value &&
  //     passwordInputs[1].value.length > 0
  //   ) {
  //     passwordInputs[0].classList.remove("valid-input");
  //     passwordInputs[0].classList.add("invalid-input");
  //     passwordInputs[1].classList.remove("valid-input");
  //     passwordInputs[1].classList.add("invalid-input");
  //   } else if (!validateInputs(e)) {
  //     errMessage.classList.add("active");
  //   }

  if (!validateInputs(e)) {
    errMessage.classList.add("active");
    console.log(true);
  } else if (
    passwordInputs[0].value !== passwordInputs[1].value &&
    passwordInputs[1].value.length > 0
  ) {
    passwordInputs[0].classList.remove("valid-input");
    passwordInputs[0].classList.add("invalid-input");
    passwordInputs[1].classList.remove("valid-input");
    passwordInputs[1].classList.add("invalid-input");

    notEqualErrorMsg.classList.add("active");
  }
}

inputs.forEach((input) => {
  if (input.type === "password") {
    input.addEventListener("input", validatePasswords);
    input.addEventListener("focus", validatePasswords);
    input.addEventListener("focusout", validatePasswords);
    return;
  }

  input.addEventListener("input", validateInputs);
  input.addEventListener("focus", validateInputs);
});
