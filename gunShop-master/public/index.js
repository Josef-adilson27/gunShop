import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot  } from 'react-dom/client';
import App from '../src/App.js';
import '../src/index.scss'
import { Provider } from 'react-redux';
import { Store } from '../src/redux/Store.js';


const root = createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <Provider store={Store} >
    <App />
   </Provider>
     
 </BrowserRouter>

);


