import React, { useEffect } from "react";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/MainSlise";
import NotFound from "../notFound/NotFound";
const backLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="30"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="white"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    />
  </svg>
);

const Cart = () => {
  const { UniqueCartProducts, PriceState } = useSelector((state) => state.Data);
  
  const dispatch = useDispatch();

  return (
    <div className="cartContainer">
      <Link to="/">
        <div className="cartBackBtn">{backLogo}</div>
      </Link>
      <div className="cart" style={{overflowY: !!UniqueCartProducts.length? 'scroll' : 'hidden'}}>
        {UniqueCartProducts.length ? (
          UniqueCartProducts.map((item) => (
            <CartCard key={item.id} item={{...item }} />
          ))
        ) : (
          <NotFound text="cart" />
        )}
      </div>
      <div className="cart-bottom">
        <div className="price-box">
          <h2>Total:{PriceState.total}</h2>
          <h2>Quantity:{PriceState.quantity}</h2>
        </div>
        <button onClick={() => dispatch(clearCart())}>Clear the cart</button>
      </div>
    </div>
  );
};
export default Cart;
