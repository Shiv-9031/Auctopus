import React from "react";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useFormik } from "formik";
import { signupSchema } from "./yup";
import { login } from "../../Redux/feature/Slice";
import { useDispatch } from "react-redux";
import "../Registration/Registration.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../component/Spinner";
import { Layout } from "../../component/Layout/Layout";

export const Login = () => {
  const url = `${process.env.REACT_APP_BASE_URL}/api/v1/student/login/`;

  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  //formik
  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signupSchema,
      onSubmit: async (values) => {
        setLoading(true);
        let response = await axios.post(url, values);

        if (response.data.success) {
          setLoading(false);
          dispatch(login(response.data));

          navigate("/");
        } else {
          setLoading(false);
          console.log(response.data.message);
        }
      },
    });

  return (
    <Layout>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="login-wrapper">
          <h2>Sign up Form</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="input-name">
                <p>
                  {" "}
                  <EmailIcon />
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="text-name"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <h3 className="form-error">{errors.email}</h3>
                ) : null}
              </div>
              <div className="input-name">
                <p>
                  <VpnKeyIcon />
                </p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="text-name"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <h3 className="form-error">{errors.password}</h3>
                ) : null}
              </div>

              <div className="button">
                <input type="submit" value={"Sign Up"} className="button" />
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};
