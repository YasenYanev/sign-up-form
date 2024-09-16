import "./styles/main.css";

const inputs = document.querySelectorAll("input");
const passwordInputs = document.querySelectorAll("input[type='password']");
const errMessage = document.querySelector(".formatErrorMsg");
const notEqualErrorMsg = document.querySelector(".notEqualErrorMsg");

class StateController {
  constructor() {
    this.regExpresions = {
      text: /^[^A-Z]*[A-Z][^A-Z]*$/,
      email: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,
      password:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      tel: /^\d{3}-\d{3}-\d{4}$/,
    };

    this.states = {
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true,
      phoneNum: true,
      samePassword: true,
    };
  }

  validateInput(input) {
    this.states[input.name] = this.regExpresions[input.type].test(input.value);

    if (
      passwordInputs[0].value !== passwordInputs[1].value &&
      passwordInputs[1].value.length > 0
    ) {
      this.states.samePassword = false;
    } else {
      this.states.samePassword = true;
    }
  }

  renderState(e) {
    const input = e.target;
    this.validateInput(input);

    errMessage.classList.remove("active");
    notEqualErrorMsg.classList.remove("active");
    input.classList.remove("invalid-input", "valid-input");

    if (this.states[input.name]) {
      input.classList.add("valid-input");
    } else {
      if (input.name === "password" && e.type !== "blur") {
        errMessage.classList.add("active");
      }
      input.classList.add("invalid-input");
    }

    if (!this.states.samePassword) {
      notEqualErrorMsg.classList.add("active");
    }
  }
}

const controller = new StateController();

inputs.forEach((input) => {
  ["input", "blur"].forEach((event) =>
    input.addEventListener(event, (e) => controller.renderState(e)),
  );
});
