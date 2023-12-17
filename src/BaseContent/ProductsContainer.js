import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from './ProductsLogo/rifledLogo.png'
import pic2 from './ProductsLogo/pislog.png'
import pic3 from './ProductsLogo/ammo.png'
import pic4 from './ProductsLogo/shoot.png'
import pic5 from './ProductsLogo/opticLogo.png'

const linkStyle = {
        width:'100%'
        ,height:'100%',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:'10px'
}

const ProductsContainer = () => {
  return (
    <div className="ProductsBlock">
      <div className="ProductItem rifledGun-box">
        <Link style={linkStyle} to="rifledGun">
          <img src={pic1} alt="" />
           <p>RifledGun</p>
        </Link>
      </div>
        
      <div className="ProductItem  smoothbore-box">
        <Link style={linkStyle} to="smoothbore">
          <img src={pic4} alt="" />
           <p>smoothbore</p>
        </Link>
      </div>

      <div className="ProductItem optics-box">
  
        <Link style={linkStyle} to="optics">
          <img src={pic5} alt="" />
           <p>optics</p>
        </Link>
      </div>

      <div className="ProductItem pistols-box">
         <Link style={linkStyle} to="pistol">
          <img src={pic2} alt="" />
           <p>pistol</p>
        </Link>
      </div>

      <div className="ProductItem ammo-box">
        <Link style={linkStyle} to="ammo">
          <img  alt="" src={pic3} />
           <p>ammo</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductsContainer;
