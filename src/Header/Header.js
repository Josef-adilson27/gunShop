import React, { useEffect, useState } from 'react';
import logo from '../../public/Images/MainLogo.png'
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {isFormHidden,searching,cleanSerching} from '../redux/MainSlise'
import Searching from '../searching/Searching';

const cartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40"  viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>  
)
const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

)
const searchLogo  = (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="white" x="0px" y="0px" width="30" height="100" viewBox="0 0 50 50">
    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
    </svg>
)
const backLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width='30' viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
)  

const Header = () => {

    const [inputText,setInputText] = useState('');
  


 

    const {HeaderHideBoolean} = useSelector(state=>state.Data) 
 
    // если HeaderHideBool = true, то скрываем Header при переходе к деталям товаров
    // if HeaderHideBool = true, then we hide the Header when going to product details
   
    const dispatch = useDispatch()


    useEffect(()=>{
     dispatch(searching(inputText))
    },[inputText])
 
     
    return (
     <div className={HeaderHideBoolean?'headerHide':'headerContainer'}>
        
        <div className='mainLogoElement'> 
         <img src={logo} alt="mainLogoElement"/> 
        </div>

   
        <div className='searchElement'>
               <div className='inputBox'>  
                   <Link to='/'>  
                    <div className='backLogoHeader'> {backLogo}</div>  
                   </Link> 
                    <input
                      type="text"
                      onBlur={()=>dispatch(cleanSerching())}
                      placeholder='Search...'
                      value={inputText}
                      onChange={(e)=>setInputText(e.target.value)}
                      />
                   <button> {searchLogo}</button>
                  
              </div>                  
        <Searching/>
         </div>
         
           <div className='userAndACartElement'>
                <div className='userAndCartIconsBox'>
                    <Link to='cart'> 
                     <div>{cartIcon}</div> 
                    </Link>
                    <div onClick={()=>dispatch(isFormHidden())}>{userIcon}</div>
                </div>
           </div>
         
    </div>
    );
}

export default Header;
