/* eslint-disable require-jsdoc */
function passwordValidation(password: string): string | null {
  if (password.length == 0 ) {
    return 'Password not be empty';
  } else if (password.length < 8) {
    return 'Password atleast 8 character';
  } else {
    return null;
  }
}

function emailValidation(email: string): string | null {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const isValid = reg.test(email) === true;
  if (email.length == 0) {
    return 'Email is required';
  } else if (!isValid) {
    return 'Email not valid';
  } else {
    return null;
  }
}

export {
  passwordValidation,
  emailValidation,
};
