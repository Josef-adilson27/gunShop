import React,{ useEffect, useState}  from "react";
import SaleSlider from "./SaleSlider";
import ProductsContainer from "./ProductsContainer";
import Footer from "../Footer/Footer";

const BaseContent = () => {
    
  return (
    <div>
      <div>
        <SaleSlider />
        <ProductsContainer />
        <Footer/>
      </div>
    </div>
  );
};

export default BaseContent;
