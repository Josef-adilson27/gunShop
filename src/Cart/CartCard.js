import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,remove, PriceFunction,} from '../redux/MainSlise'

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
                 >X</button>       
             </div>
        </div>
    );
}

export default CartCard;
