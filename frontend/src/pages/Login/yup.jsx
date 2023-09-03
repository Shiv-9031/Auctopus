import * as Yup from "yup";

export const signupSchema = Yup.object({
  email: Yup.string().email().required("Please enter valid email"),
  password: Yup.string().min(5).required("Please enter  password"),
});
