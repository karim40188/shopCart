import React, { useContext, useEffect, useState } from "react";
import { UrlContext } from "../Context/Context";
import axios from "axios";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

function Categories() {
  let baseUrl = useContext(UrlContext);

  function getCategories() {
    return axios.get(`${baseUrl}/api/v1/categories`);
  }

  let { data } = useQuery("categories", getCategories);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay:true,
    
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Categories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="row">
        <Slider {...settings}>
          {data?.data?.data.map((item) => {
            return (
              <div key={item._id} className="col-md-3 details-img">
                <img className="w-100 h-100" src={item.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Categories;
