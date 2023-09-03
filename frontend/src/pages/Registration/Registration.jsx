import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./Registration.css";
import { useFormik } from "formik";
import { signupSchema } from "./yup";
import { list } from "./list.js";
import { Layout } from "../../component/Layout/Layout";
export const Registration = () => {
  // const url = `${process.env.REACT_APP_BASE_URL}/api/v1/student/register/`;
  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        password: "",
        college: "",
        address: "",
      },
      validationSchema: signupSchema,
      onSubmit: async (values) => {
        let response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/v1/student/register/`,
          values
        );

        if (response.data.success) {
          Navigate("/login");
        } else {
          console.log(response.data.message);
        }
      },
    });

  let valueList = [
    [
      values.name,
      values.phone,
      values.email,
      values.password,
      values.college,
      values.address,
    ],
    [
      errors.name,
      errors.phone,
      errors.email,
      errors.password,
      errors.college,
      errors.address,
    ],
    [
      touched.name,
      touched.phone,
      touched.email,
      touched.password,
      touched.college,
      touched.address,
    ],
  ];

  return (
    <Layout>
      <div className="login-wrapper">
        <h2>Registration Form</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {list.map((data, index) => {
              return (
                <div className="input-name" key={index}>
                  <p>{data.element}</p>
                  <input
                    type="text"
                    name={data.name}
                    autoComplete="off"
                    value={valueList[0][index]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={data.placeholder}
                    className="text-name"
                  />
                  {valueList[1][index] && valueList[2][index] ? (
                    <h3 className="form-error">{valueList[1][index]}</h3>
                  ) : null}
                </div>
              );
            })}

            <div className="button">
              <input type="submit" value={"Register"} className="button" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
