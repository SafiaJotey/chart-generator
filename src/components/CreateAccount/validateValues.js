const validateValues = (values) => {
  const errors = {};
  // regular expressions for validations
  const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regex_phone =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  //email validation
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!regex_email.test(values.email)) {
    errors.email = 'This is not a valid email format!';
  }
  //password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be more than 6 characters';
  }
  //confirm password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = 'password confirmation is required!';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match!";
  }
  //name input validation
  if (!values.fullName) {
    errors.name = 'name is required!';
  }
  //phone number validation
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number is required!';
  } else if (!regex_phone.test(values.phoneNumber)) {
    errors.phoneNumber = 'This is not a valid Phone number!';
  }
  //checkbox validation
  if (!values.isGoing) {
    errors.agreement = 'This field is required!';
  }
  return errors;
};
export default validateValues;
