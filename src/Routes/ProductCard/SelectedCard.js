import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {isHeaderHidden,AddToCart,increment} from '../../redux/MainSlise'
import { Link } from 'react-router-dom';

const SelectedCard = () => {
  const backLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='30' viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
)  

    //скрываем Header сразу при переходе
   //hide Header immediately upon first render
    useEffect(()=>{dispatch(isHeaderHidden(true))},[dispatch])
   
    const dispatch = useDispatch()
    const {Products } = useSelector(state=>state.Data) 
    const {id} = useParams()
    //получаем товар id которого соответствует rifledGunid, и рендерим его свойства
    //geting a product id which id corresponds to rifledGunid, and render its properties
    const product = Products.find((prod)=>prod.id === Number(id))
    
  
  return (
    <div className='selectedProduct-box'>
     <div className='selectedProduct'> 

        <div className='left-side-box'>
          <div>
            <img style={{width:'100%',height:'100%',border:'none'}} src={product.img}></img>
          </div>   

          <div>
            <h2>Name: {product.name}</h2>
            <h2>Type: {product.type}</h2>
            <h2>Price: $ {product.price}</h2>
            <h3>Caliber: 12 mm</h3>
          <button onClick={()=>dispatch(AddToCart(product))} >add</button>
          </div>
          
        </div>

        <div className='right-side-box'>
          <div className='right-side-box-tex'>{product.desc}</div>        
        </div>
     </div>
     <Link to='/'>  
        <div className='backLogoCart'> {backLogo}</div>  
     </Link> 
    </div>
  );
}

export default SelectedCard;

