/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export let UrlContext = createContext();
// eslint-disable-next-line react/prop-types
export function BaseUrlContextProvider({ children }) {
  let baseUrl = `https://ecommerce.routemisr.com`;
  return <UrlContext.Provider value={baseUrl}>{children}</UrlContext.Provider>;
}
export let UserToken = createContext();
export default function UserTokenProvider({ children }) {
  let [token, setToken] = useState(null);
  return (
    <UserToken.Provider value={{ token, setToken }}>
      {children}
    </UserToken.Provider>
  );
}


