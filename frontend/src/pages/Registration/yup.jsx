import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("Please enter valid email"),
  password: Yup.string().min(6).required("Please enter  password"),
  phone: Yup.string().min(10).max(10).required("Please enter contact number"),
  college: Yup.string().min(6).required("Please enter college name"),
  address: Yup.string().min(6).required("Please enter address"),
});
