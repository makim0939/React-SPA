import React from "react";
import { createBrowserRouter } from "react-router-dom";

//import pages
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Root from "./components/routes/Root";
import Contact from "./components/routes/Contact";
import Error from "./components/routes/Error";
import Error404 from "./components/routes/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
