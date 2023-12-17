import React from 'react';
import {useSelector} from 'react-redux'

const Searching = () => {
    const { SearchingElements,itemNotFoundText} = useSelector(state=>state.Data) 
  
    return (
        <div className='searching'>
         {     //если в массиве есть елементы-рендерим, если нет, то выводим текст из temNotFoundText 
               SearchingElements.length!==0  ?    
               SearchingElements.map((item) => (
                 <p key={item.id} style={{padding:'10px',fontSize:'20px'}}>{item.name}</p>       
               )):itemNotFoundText
         }
        </div>
    );
}

export default Searching;
