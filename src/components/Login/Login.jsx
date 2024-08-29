import { useContext, useState } from "react";
import {  useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UrlContext, UserToken } from "../Context/Context";
function Login() {
  let navigate = useNavigate();
  let [err, setErr] = useState(null);
  let [loading, setLoading] = useState(false);
  let baseUrl = useContext(UrlContext);
  let { setToken } = useContext(UserToken);
  async function signIn(values) {
    setLoading(true);
    let response = await axios
      .post(`${baseUrl}/api/v1/auth/signin`, values)
      .catch((error) => {
        setErr(error?.response.data.message);
        setLoading(false);
      });
    if (response.data.message == "success") {
      setLoading(false);
      localStorage.setItem("user", response?.data?.token);
      setToken(response?.data.token);
      navigate("/");
    }
    console.log(response);
  }

  let validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .matches(/[A-Za-z0-9]+@(gmail|yahoo).com/gm, "email in valid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "must be at least 6 chars")
      .max(10, "max length is 10"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: signIn,
  });

  return (
    <>
      <form action="" className="w-75 mx-auto">
        <h2>Login:</h2>
        {err != null ? <p className="alert alert-danger">{err}</p> : ""}
        <label htmlFor="email">Email :</label>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          id="email"
          className="form-control"
          type="email"
        />
        {formik.errors.email && formik.touched.email ? (
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
        {formik.errors.password && formik.touched.password? (
          <div className="alert alert-danger">{formik.errors.password}</div>
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
            Login
          </button>
        )}

        <Link to='/forgotpassword'>forgot password</Link>
      </form>
    </>
  );
}

export default Login;
