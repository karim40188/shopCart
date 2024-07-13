import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
function forgotPassword() {
  let [data, setData] = useState(null);
  let navigate = useNavigate();
  async function forgotPass(values) {
    let { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      values
    );
    if (data.statusMsg == "success") {
      setData(data.statusMsg);
    }
  }
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: forgotPass,
  });

  let formik2 = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: verifyCode,
  });
  async function verifyCode(values) {
    let { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      values
    );
    console.log(data);
    if (data.status == "Success") {
      navigate("/resetpassword");
    }
  }
  return (
    <>
      {data == null ? (
        <form action="" className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <button type="submit" className="btn btn-primary mt-2">
            send code
          </button>
        </form>
      ) : (
        <form className="w-75 mx-auto " onSubmit={formik2.handleSubmit}>
          <label htmlFor="resetCode">resetCode</label>
          <input
            type="text"
            className="form-control my-2 "
            id="resetCode"
            onChange={formik2.handleChange}
            value={formik2.values.resetCode}
          />
          <button className="btn btn-primary">new password</button>
        </form>
      )}
    </>
  );
}

export default forgotPassword;
