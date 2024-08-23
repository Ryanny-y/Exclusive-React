import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import Contact from "./components/pages/Contact.jsx";
import About from "./components/pages/About.jsx";
import SignUp from "./components/auth/Signup.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Cart from "./components/pages/Cart.jsx";
import Wishlist from "./components/pages/Wishlist.jsx";
import Login from "./components/auth/Login.jsx";
import Logout from "./components/auth/Logout.jsx";
import Checkout from "./components/pages/Checkout.jsx";
import ProductDetails from "./components/pages/ProductDetails.jsx";
import Products from "./components/pages/Products.jsx";
import "./index.css";
import "./styles/sliderStyles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// SWIPER
import { register } from "swiper/element/bundle";
register();

const router = createBrowserRouter([
  {
    path: "/Exclusive-React/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:filter",
        element: <Products />
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
