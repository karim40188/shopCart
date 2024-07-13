import React, { useContext } from "react";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import MainSlider from "../MainSlider/MainSlider";
import { Helmet } from "react-helmet";
import useNetwork from "../Hooks/useNetwork";
function Home() {
  let x=useNetwork()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <MainSlider />
      {x}
      <Categories />
      <Products />
    </>
  );
}

export default Home;
