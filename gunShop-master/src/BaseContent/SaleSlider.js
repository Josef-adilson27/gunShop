import React from 'react';
import pic1 from '../../public/Images/hunting3.jpg'
import pic3 from '../../public/Images/revolver.jpeg'
import pic4 from '../../public/Images/shooting.jpg'

const SaleSlider = () => {
    return (
        <div className='saleContainer'>
            <div className="container">
                <div className="wrapper">
                    
                  <div className="pic1">
                    <img  style={{width:'100%',height:'100%',backgroundSize:'cover'}} src={pic1}/>
                  </div>

                  <div className="pic2">
                    <img style={{width:'100%',height:'100%',backgroundSize:'cover'}} src={pic3}/>
                  </div>

                  <div className="pic3">
                  <img style={{width:'100%',height:'100%',backgroundSize:'cover'}} src={pic4}/>
                  </div>

                </div>
            </div>

        </div>
    );
}
export default SaleSlider;
