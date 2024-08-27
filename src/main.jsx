import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import UserTokenProvider, {
  BaseUrlContextProvider,
} from "./components/Context/Context.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContextProvider } from "./components/Context/CartContext.jsx";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
let queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <BaseUrlContextProvider>
            <UserTokenProvider>
              <App />
            </UserTokenProvider>
          </BaseUrlContextProvider>
          {/* <ReactQueryDevtools position="bottom-left" initialIsOpen={false} /> */}
        </CartContextProvider>
      </QueryClientProvider>
    </Provider>
  </>
);
