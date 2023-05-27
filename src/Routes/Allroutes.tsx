// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Layouts/Home/HomeLayout";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
