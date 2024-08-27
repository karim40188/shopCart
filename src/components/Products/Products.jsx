import { useContext } from "react";
import { UrlContext } from "../Context/Context";
import { useQuery } from "react-query";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { CartContext } from "../Context/CartContext";
function Products() {
  let baseUrl = useContext(UrlContext);

  async function getAllProducts() {
    let response = await axios.get(`${baseUrl}/api/v1/products`);
    return response;
  }

  let { isLoading, data } = useQuery("allProducts", getAllProducts);

  let { addCart } = useContext(CartContext);
  async function addToCart(id) {
    let { data } = await addCart(id);
    if (data.status === "success") {
      toast.success(data.message);
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
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
        <>
          <div className="row gy-4 mt-3">
            {data?.data.data.map((item) => {
              return (
                <div key={item.id} className="col-md-2 mx-auto product ">
                  <Link to={`/details/${item.id}`} className="">
                    <div  className="img-container">
                      <img  className="w-100 " src={item.imageCover} alt="" />
                    </div>
                    <p>{item.category.name}</p>
                    <div className="product-info">
                      <p >
                        {item.title.split(" ").slice(0, 3).join(" ")}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>{item.price} EGP</span>
                      <span>
                        <i className="fas fa-star text-warning">
                          {item.ratingsAverage}
                        </i>
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      addToCart(item.id);
                    }}
                    className="btn btn-success d-block m-auto w-50  "
                  >
                    Add+
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Products;
