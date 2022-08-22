export const validFullName = new RegExp(
  /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/
);

export const validEmail = new RegExp(
 /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
);
export const validPassword = new RegExp("^(?=.?[A-Za-z])(?=.?[0-9]).{6,}$");
export const validConfirmPassword = new RegExp(
  "^(?=.?[A-Za-z])(?=.?[0-9]).{6,}$"
);
export const validMobile = new RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
