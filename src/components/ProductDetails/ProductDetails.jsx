import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UrlContext } from "../Context/Context";
import {  useParams } from "react-router-dom";

// https://ecommerce.routemisr.com/api/v1/products/6428ca68dc1175abc65ca02b

import Slider from "react-slick";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { CartContext } from "../Context/CartContext";
function ProductDetails() {
  let [details, setDetails] = useState({});
  // let [status, setStatus] = useState(null);
  let params = useParams();
  let baseUrl = useContext(UrlContext);
  let { addCart } = useContext(CartContext);

  async function getDetails(id) {
    let { data } = await axios.get(`${baseUrl}/api/v1/products/${id}`);
    setDetails(data?.data);
  }

  async function addToCart(id) {
    let { data } = await addCart(id);
    if (data?.status === "success") {
      toast.success(data.message);
    }
  }

  useEffect(() => {
    getDetails(params.id);
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{details.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Slider {...settings}>
              {details?.images?.map((img, index) => {
                return <img key={index} className="w-100" src={img} alt="" />;
              })}
            </Slider>
          </div>
          <div className="col-md-8">
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <p>{details?.category?.name}</p>
            <div className="d-flex justify-content-between">
              <p>${details.price} EGP</p>
              <p>
                <i className="fas fa-star text-warning"></i> $
                {details.ratingsAverage}
              </p>
            </div>
            <button
              onClick={() => {
                addToCart(details._id);
              }}
              className="btn btn-success w-100"
            >
              add to card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
