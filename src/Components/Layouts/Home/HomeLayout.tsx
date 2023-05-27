// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Static/Header";
import Footer from "../../Static/Footer";
import Search from "../../Static/Search";

const HomeLayout = () => {
  return (
    <div className="w-[90%] m-auto bg-white">
      <Header />

      <Search />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
