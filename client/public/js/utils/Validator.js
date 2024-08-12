
class Validator {
  NUMERIC_CHARACTER_REGEX_PATTERN = /\d/;
  SPECIAL_CHARACTER_REGEX_PATTERN = /[^a-zA-Z0-9\s]/;
  EMAIL_REGEX_PATTERN = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  UPPERCASE_REGEX_PATTERN = /[A-Z]/;

  isValidName(name) {
    if (name == "") {
      return { isValid: false, message: "Name cannot be empty" };
    }

    if (this.NUMERIC_CHARACTER_REGEX_PATTERN.test(name)) {
      return { isValid: false, message: "Name cannot contain numeric characters" };
    }

    if (this.SPECIAL_CHARACTER_REGEX_PATTERN.test(name)) {
      return { isValid: false, message: "Name cannot contain special characters" };
    }

    return { isValid: true };
  }

}

const validator = new Validator();

export default validator;