import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,remove, PriceFunction,} from '../redux/MainSlise'
const deleteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width={'30px'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

)

const CartCard = ({item}) => {

  const {CartProducts} = useSelector(state=>state.Data)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(PriceFunction())
  },[dispatch,item.quantity,CartProducts.length])
  
 
    return (
        <div className='cardContainer'>
            <div className='cardImgContainer'>
              <img src={item.img} alt="" />
            </div>
             <div className='cardFooter'>
                <div className='counterContainer'> 
                    <div className='counter'>  
                      <button onClick={()=>dispatch(increment(item.id))}>+</button>
                      <button onClick={()=>dispatch(decrement(item.id))}>-</button>
                    </div>
                  <span>{item.quantity}</span>
                </div>       
                 <h2>{item.name}</h2>    
                 <button
                 onClick={()=>dispatch(remove(item))}
                 >{deleteIcon}</button>       
             </div>
        </div>
    );
}

export default CartCard;
