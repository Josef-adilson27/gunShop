import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'


const ProductCard = ({item}) => {
    
    const dispatch = useDispatch()

    //выявляем Header после его сокрытия при переходе selectedCards

  
    return (
        <div className='productCard'>

                <div className='cardImg-box'>
                    <img className='cardImg' src={item.img} alt="" />
                </div>

                <div className='describe'>  
                    
                    <p className='priceText'>$ {item.price} | {item.type} </p>               
                    <p className='nameText'>{item.name}</p>  
                    
                    <Link style={{width:'100%',textAlign:'center'}} to={`${item.id}`}>
                        <button>Select</button>
                    </Link>

               </div> 
             
        </div>
    );
}
export default ProductCard;
