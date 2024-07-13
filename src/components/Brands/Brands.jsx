import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../Redux/BrandsSlice";
import { BallTriangle } from "react-loader-spinner";
function Brands() {
  let dispatch = useDispatch();
  let { brands, isLoading, isError } = useSelector((state) => {
    return state.brands;
  });

  useEffect(() => {
    dispatch(getBrands());
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brands</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isLoading ? (
        <div className="loading">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="row">
          {brands.map((brand) => {
            return (
              <div className="col-md-3 brand" key={brand._id}>
                <img className="w-100" src={brand.image} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Brands;
