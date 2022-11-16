import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import './index.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import PlaceToStay from "./pages/placeToStay/PlaceToPlay";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "place-to-stay",
        element: <PlaceToStay />,
      },
    ]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);