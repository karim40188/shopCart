import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../features/BrandSlice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BallTriangle } from "react-loader-spinner";


function Brands() {
  let { data, isLoading } = useSelector((state) => {
    return state.BrandsReducer;
  });
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brands</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

  

      {isLoading ? (
       <BallTriangle
       height={100}
       width={100}
       radius={5}
       color="#4fa94d"
       ariaLabel="ball-triangle-loading"
       wrapperStyle={{}}
       wrapperClass="justify-content-center align-items-center vh-100"
       visible={true}
     />
      ) : (
        <div className="row">
              <h3>Brands</h3>
          {data?.map((item) => {
            return (
              <Link
                key={item._id}
                className="col-md-2 mx-auto pointer"
                to={`/brands/${item._id}`}
              >
                <img src={item.image} alt="" className="w-100" />
                <p className="fw-bold">{item.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Brands;
