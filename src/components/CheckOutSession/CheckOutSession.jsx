import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function CheckOutSession() {
  let navigate=useNavigate()
  let { checkOut, getCart } = useContext(CartContext);
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: checkOutForm,
  });

  async function checkOutForm(id, values) {
    let { data } = await getCart();
    let response = await checkOut(data.data._id, values);
    window.location.href=response.data.session.url
  }
  return (
    <>
      <form action="" className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
        <label htmlFor="details">Details</label>
        <input
          id="details"
          type="text"
          onChange={formik.handleChange}
          className="form-control"
          value={formik.values.details}
        />

        <label htmlFor="phone">phone</label>
        <input
          id="phone"
          type="text"
          onChange={formik.handleChange}
          className="form-control"
          value={formik.values.phone}
        />

        <label htmlFor="city">city</label>
        <input
          id="city"
          type="text"
          onChange={formik.handleChange}
          className="form-control"
          value={formik.values.city}
        />

        <button type="submit" className="btn btn-primary mt-2 d-block ms-auto">
          checkOut
        </button>
      </form>
    </>
  );
}

export default CheckOutSession;
