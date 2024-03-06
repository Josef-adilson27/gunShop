import React, { useEffect, useState } from "react";
import logo from "../../public/Images/MainLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isFormHidden } from "../redux/MainSlise";

const cartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="40"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="white"
    className=""
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);
const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="40"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="white"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const Header = () => {
  const { Products } = useSelector((state) => state.Data);
  const [inputText, setInputText] = useState("");
  const [SearchingElements, setSearchingElements] = useState([]);

  const dispatch = useDispatch();
  //функция живого поиска. ложит товары в  SearchingElements, если они соответствуют тексту из  inputText и рендерит
 
  useEffect(() => {
    Products.map((item) => {
      if (inputText  === item.name ) {
        setSearchingElements((curr) => [...curr, item]);
      } else if (inputText === "") {
        setSearchingElements([]);
      }
    });
  }, [inputText]);

  console.log();
  
  return (
    <div className="Header ">
      {/* логотип */}
      <div className="div1">
        <div className="mainLogoElement">
          <img src={logo} alt="mainLogoElement" />
        </div>
      </div>
      {/* search box */}
      <div className="div2">
        <div className="searchElement">
          <input
            type="text"
            placeholder="Search..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {/*вывод карточек под строкой поиска*/}
          {SearchingElements?.map((item) => (
            <div key={item.id} className="searchingCard">
              <img src={item.img} alt="picrture of product  " />
              <div className="searchingCardFooter">
                <h2>{item.name}</h2>
                <h2>$ {item.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*cart and usericon*/}
      <div className="div3">
        <div className="userAndACartElement">
          <div className="userAndCartIconsBox">
            <Link to="cart">
              <div>{cartIcon}</div>
            </Link>
            <div onClick={() => dispatch(isFormHidden())}>{userIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
