import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";


function ResetPassword() {


  let validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .matches(/[A-Za-z0-9]+@(gmail|yahoo).com/gm, "email in valid"),
  newPassword: Yup.string().required("password is required"),
  });
  let formik = useFormik({
    initialValues: {
      email:'',
      newPassword: "",
    },
    validationSchema,
    onSubmit: newPassword,
  });
  async function newPassword(values){
    let response=await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,values)
    console.log(response)
  }
  return (
    <>
      <form action="" className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="form-control my-2"
          type="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="newPassword">newPassword</label>
        <input
          className="form-control my-2"
          type="password"
          id="newPassword"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
        />
        {formik.errors.newPassword ? (
          <div className="alert alert-danger">{formik.errors.newPassword}</div>
        ) : (
          ""
        )}

        <button type="submit" className="btn btn-primary mt-2">reset new Password</button>
      </form>
    </>
  );
}

export default ResetPassword;
