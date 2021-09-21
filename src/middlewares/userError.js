// const INVALID_DATA_CODE = 422;
// const INTERNAL_SERVER_ERROR_CODE = 500;

const checkErrorType = (err) => {
  switch (true) {
    case err.invalidEntries:
      return { code: 400, message: 'Invalid entries. Try again.' };

    case err.emailExists:
      return { code: 409, message: 'Email already registered' };

    case err.fieldsRequired:
      return { code: 401, message: 'All fields must be filled' };

    case err.incorrectUserInfo:
      return { code: 401, message: 'Incorrect username or password' };

    default:
      return { code: 500, message: 'Internal server error' };
  }
};

module.exports = (err, _req, res, next) => {
  if (!err.fromUser) return next();
  const { code, message } = checkErrorType(err);
  console.log(code, message);
  res
    .status(code)
    .json({ message });
};
