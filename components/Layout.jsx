import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
