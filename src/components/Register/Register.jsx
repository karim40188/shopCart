import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

useNavigate;
function Register() {
  let [err, setErr] = useState(null);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function signUp(values) {
    setLoading(true);
    let response = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((error) => {
        console.log(error.response.data.message);
        setErr(error.response.data.message);
        setLoading(false);
      });
    console.log(response.data.message);
    if (response.data.message == "success") {
      setLoading(false);
      navigate("/login");
    }
  }

  let validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "min length is 3 character")
      .max(10, "max length is 10 character"),
    email: Yup.string()
      .required("email is required")
      .matches(/[A-Za-z0-9]+@(gmail|yahoo).com/gm, "email in valid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "must be at least 6 chars")
      .max(10, "max length is 10"),
    rePassword: Yup.string()
      .required("rePassword is required")
      .oneOf([Yup.ref("password")], "password and repassword is not match"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/01[0125][0-9]{8}/gm, "accept only egypt phone numbers"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: signUp,
  });

  return (
    <>
      <form action="" className="w-75 mx-auto">
        <h2>Register Now :</h2>
        {err != null ? <p className="alert alert-danger">{err}</p> : ""}
        <label htmlFor="name">Name :</label>

        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          id="name"
          className="form-control"
          type="text"
        />
        {formik.errors.name ? (
          <div className="alert alert-danger">{formik.errors.name}</div>
        ) : (
          ""
        )}

        <label htmlFor="email">Email :</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          id="email"
          className="form-control"
          type="email"
        />
        {formik.errors.email ? (
          <div className="alert alert-danger">{formik.errors.email}</div>
        ) : (
          ""
        )}

        <label htmlFor="password">Password:</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          id="password"
          className="form-control"
          type="password"
        />
        {formik.errors.password ? (
          <div className="alert alert-danger">{formik.errors.password}</div>
        ) : (
          ""
        )}

        <label htmlFor="rePassword">Repassword</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rePassword}
          id="rePassword"
          className="form-control"
          type="password"
        />
        {formik.errors.rePassword ? (
          <div className="alert alert-danger">{formik.errors.rePassword}</div>
        ) : (
          ""
        )}

        <label htmlFor="phone">Phone</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          id="phone"
          className="form-control mb-3"
          type="tel"
        />
        {formik.errors.phone ? (
          <div className="alert alert-danger">{formik.errors.phone}</div>
        ) : (
          ""
        )}

        {loading == true ? (
          <button className="btn btn-success d-block ms-auto">
            <i className="fas fa-spinner fa-spin "></i>
          </button>
        ) : (
          <button
            onClick={formik.handleSubmit}
            disabled={!(formik.isValid && formik.dirty)}
            className="btn btn-success float-end"
            type="submit"
          >
            Regsiter
          </button>
        )}
      </form>
    </>
  );
}

export default Register;
