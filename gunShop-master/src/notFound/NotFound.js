import React from 'react';

const NotFound = ({text}) => {
  
    
    return (
        <div style={{fontSize:'30px'}}>
            {
                text?
                <p>You have not added anything in {text}.</p>
                :
                <p>We have not added products here.</p>
            }         
        </div>
    );
}

export default NotFound;
