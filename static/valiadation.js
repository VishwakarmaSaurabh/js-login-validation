export const isEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  const errors = {};

  if (email === "") {
    return (errors["email"] = "Your email can not be empty.");
  }
  if (re.test(email)) {
    return errors;
  }
  return (errors["email"] = "Please enter a valid email address.");
};

export const validate = (username, password) => {
  const errors = {};

  if (username === "") {
    errors["username"] = "Your username cannot be empty";
  } else if (username.length < 5) {
    errors["username"] = "Your username must be at least 5 characters.";
  } else if (username.length > 15) {
    errors["username"] = "Your username must be less than 15 characters.";
  }

  if (password == "") {
    errors["password"] = "Your password can not be empty.";
  } else if (password.length < 8) {
    errors["password"] = "Your password must be at least 8 characters.";
  } else if (password.length > 25) {
    errors["password"] = "Your password must be less than 25 characters.";
  } else if (password.search(/[a-z]/i) < 0) {
    errors["password"] = "Your password must contain at least one letter.";
  } else if (password.search(/[0-9]/) < 0) {
    errors["password"] = "Your password must contain at least one digit.";
  }

  return errors;
};

export const validateRegister = (
  fullname,
  username,
  email,
  password,
  passwordConfirm
) => {
  const errors = {};

  // Fullname validation
  if (fullname === "") {
    errors["fullname"] = "Full name is required.";
  } else if (fullname.search(/^[a-zA-Z,'.\-\s]+$/) === -1) {
    errors["fullname"] = "Full name can not have digits.";
  }

  // Email validation
  if (email === "") {
    errors["email"] = "Email is required.";
  } else if (email.search(/\S+@\S+\.\S+/) === -1) {
    errors["email"] = "Please enter a valid email address.";
  }

  //Username validation
  if (username === "") {
    errors["username"] = "Username is required.";
  } else if (username.search(/[A-Za-z0-9]/) === -1) {
    errors["username"] = "Only letters and digits are allowed.";
  } else if (username.length < 5) {
    errors["username"] = "Username must have at least 5 characters.";
  } else if (username.length > 15) {
    errors["username"] = "Username can have at most 15 characters.";
  }

  //Password validation
  if (password == "") {
    errors["password"] = "Your password can not be empty.";
  } else if (password.length < 8) {
    errors["password"] = "Your password must be at least 8 characters.";
  } else if (password.length > 25) {
    errors["password"] = "Your password must be less than 25 characters.";
  } else if (password.search(/[a-z]/i) < 0) {
    errors["password"] = "Your password must contain at least one letter.";
  } else if (password.search(/[0-9]/) < 0) {
    errors["password"] = "Your password must contain at least one digit.";
  }

  // Password Confirm validation
  if (passwordConfirm == "") {
    errors["passwordConfirm"] = "Your confirm password can not be empty.";
  } else if (passwordConfirm !== password) {
    errors["passwordConfirm"] =
      "Confirm password did not matched with password.";
  } else if (passwordConfirm.length < 8) {
    errors["passwordConfirm"] =
      "Your confirm password must be at least 8 characters.";
  } else if (passwordConfirm.length > 25) {
    errors["passwordConfirm"] =
      "Your confirm password must be less than 25 characters.";
  } else if (passwordConfirm.search(/[a-z]/i) < 0) {
    errors["passwordConfirm"] =
      "Your confirm password must contain at least one letter.";
  } else if (passwordConfirm.search(/[0-9]/) < 0) {
    errors["passwordConfirm"] =
      "Your confirm password must contain at least one digit.";
  }

  return errors;
};
