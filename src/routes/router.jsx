import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "cart",
        element: <Cart />
      },
    ],
  },
]);