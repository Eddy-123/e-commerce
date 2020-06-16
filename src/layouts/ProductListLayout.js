import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ProductListLayout = props => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default ProductListLayout;
