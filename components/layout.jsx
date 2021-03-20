import React from "react";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Footer from "../components/Footer";

const layout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
