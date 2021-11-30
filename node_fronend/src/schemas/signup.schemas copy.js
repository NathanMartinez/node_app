import * as yup from "yup";

const phoneRegExp =
/\+?\d?-? ?((\d{10})|(\(\d{3}\)\d{3}-\d{4})|(\d{3}-\d{3}-\d{4})|(\(\d{3}\)-\d{3}-\d{4})|(\d{3}.\d{3}.\d{4}))/;

const signupSchema = yup.object().shape({
username: yup
  .string()
  .min(5, "Username is too short - should be 5 chars minimum.")
  .matches(/[a-zA-Z]/, "Username can only contain Latin letters.")
  .required(),
email: yup.string().email().required(),
password: yup
  .string()
  .min(8, "Password is too short - should be 8 chars minimum.")
  .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
  .required(),
phone_number: yup
  .string()
  .min(10)
  .max(14)
  .matches(phoneRegExp, "Phone number is not valid"),
});

export default signupSchema