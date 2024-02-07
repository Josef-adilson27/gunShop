import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import {useSelector,useDispatch} from 'react-redux'
import {isHeaderHidden,AddToCart} from '../redux/MainSlise'


const backLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="30"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    />
  </svg>
);

const RifledGun = ({ products }) => {
  const {Products,CartProducts} = useSelector(state=>state.Data) 
  
  return (
    <div className="routeContainer">
      
      <div className="ProductsContainer">
        {products?.map((item) => {
          return (
            <div className="ProductsCells" key={item.id}>
              <ProductCard item={{ ...item }} />
            </div>
          );
        })}
      </div>
      <Link to="/">
        <div className="backBtn">{backLogo}</div>
      </Link>
    </div>
  );
};

export default RifledGun;
