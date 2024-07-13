import React, { useContext, useEffect, useState } from "react";
import { UrlContext } from "../Context/Context";
import { Helmet } from "react-helmet";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  let [cart, setCart] = useState([]);
  let { removeCartItem, getCart, updateCartQuantity } = useContext(CartContext);

  async function getLoggedUserCart() {
    let { data } = await getCart();
    setCart(data?.data);
  }
  useEffect(() => {
    getLoggedUserCart();
  }, []);

  async function removeCart(id) {
    let { data } = await removeCartItem(id);
    setCart(data.data);

  }
  async function updateQuantity(count, id) {
    let { data } = await updateCartQuantity(count, id);
    setCart(data?.data);
    if (data.data.products.count == 0) {
      removeCart(id);
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        style={{ backgroundColor: "#eee" }}
        className="w-75 mx-auto my-2 p-2 "
      >
        <h1>Shop Cart</h1>

        <p>total price : {cart?.totalCartPrice}</p>
        {cart?.products?.map((product) => {
          return (
            <div className="row gy-2" key={product.product._id}>
              <div className="col-md-1">
                <img
                  className="w-100"
                  src={product.product.imageCover}
                  alt=""
                />
              </div>
              <div className="col-md-9">
                <p>{product.product.title}</p>
                <p className="text-success">Price: {product.price}</p>
                <button
                  onClick={() => {
                    removeCart(product.product._id);
                  }}
                  className="btn btn-outline-danger"
                >
                  <i className="fas fa-trash"></i> Remove
                </button>
              </div>

              <div className="col-md-2">
                <button
                  onClick={() => {
                    updateQuantity(product.product._id, product.count + 1);
                  }}
                  className="btn btn-outline-dark"
                >
                  +
                </button>
                <span className="mx-2">{product.count}</span>
                <button
                  onClick={() => {
                    updateQuantity(product.product._id, product.count - 1);
                  }}
                  className="btn btn-outline-dark"
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
        <Link to='/checkout'>
          <button className="btn btn-success">payment online</button>
        </Link>
      </div>
    </>
  );
}

export default Cart;

// {cart?.products?.map((item)=>{
//   return (
//     <>
//     <div className="col-md-3">
//     <img className="w-100" src={item?.product?.imageCover} alt="" />
//     </div>
//     </>
//   )
// })}
