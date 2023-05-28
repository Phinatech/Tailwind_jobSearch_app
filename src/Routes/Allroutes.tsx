// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Layouts/Home/HomeLayout";
import { HomeScreen } from "../Pages";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
