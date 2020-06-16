import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = props => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default MainLayout;
