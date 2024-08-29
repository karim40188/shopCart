/* eslint-disable react/prop-types */
// add cart context
import axios from "axios";
import { createContext } from "react";
// import { UrlContext } from "./Context";

export let CartContext = createContext();

export function CartContextProvider({ children }) {
  async function addCart(id) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: id,
        },
        {
          headers: {
            token: localStorage.getItem("user"),
          },
        }
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function getCart() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
        token: localStorage.getItem("user"),
      },
    });
  }

  async function removeCartItem(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      headers: {
        token: localStorage.getItem("user"),
      },
    });
  }

  async function updateCartQuantity(id, count) {
    return axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: count,
      },
      {
        headers: {
          token: localStorage.getItem("user"),
        },
      }
    );
  }

  async function checkOut(id, shippingAddress) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}`,
      {
        shippingAddress: shippingAddress,
      },
      {
        headers: {
          token: localStorage.getItem("user"),
        },
      }
    );
  }
  return (
    <CartContext.Provider
      value={{ checkOut, addCart, getCart, removeCartItem, updateCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
