import validator from "./utils/Validator.js";
import { addValidationListeners } from "./utils/common.js";
import { 
  toggleIcon, 
  toggleType,
  validateConfirmPasswordAndUpdateUI,
  validateEmailAndUpdateUI,
  validateNameAndUpdateUI,
  validatePasswordAndUpdateUI
} from "./utils/userInteraction.js";

const signUpForm = document.getElementById("sign-up-form");
const nameInput = signUpForm.querySelector("#name");
const emailInput = signUpForm.querySelector("#email");
const passwordInput = signUpForm.querySelector("#password");
const confirmPasswordInput = signUpForm.querySelector("#confirm-password");
const imgElements = signUpForm.querySelectorAll("#eye-icon");

signUpForm.reset();

imgElements[0].addEventListener("click", () => {
  toggleIcon(
    imgElements[0],
    "/images/icons/eye-close-icon.png",
    "/images/icons/eye-open-icon.png",
  );
  toggleType(passwordInput, "password", "text");
});

imgElements[1].addEventListener("click", () => {
  toggleIcon(
    imgElements[1],
    "/images/icons/eye-close-icon.png",
    "/images/icons/eye-open-icon.png",
  );
  toggleType(confirmPasswordInput, "password", "text");
});


addValidationListeners(nameInput, validateNameAndUpdateUI);
addValidationListeners(emailInput, validateEmailAndUpdateUI);
addValidationListeners(passwordInput, validatePasswordAndUpdateUI);
addValidationListeners(confirmPasswordInput, (e) => {
  validateConfirmPasswordAndUpdateUI(e, passwordInput.value)
});