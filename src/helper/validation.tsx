
const PASSWORD_MIN_LENGTH = 8;
const REGEX = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
};

const ERROR_MESSAGES = {
  REQUIRED: 'This Field Is Required',
  EMAIL_INVALID: 'Email not valid',
  PASSWORD_INVALID: 'Password atleast 8 character',
};

export {
  ERROR_MESSAGES,
  REGEX,
  PASSWORD_MIN_LENGTH,
};
