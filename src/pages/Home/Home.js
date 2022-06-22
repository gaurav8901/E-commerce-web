import React from 'react'
import './Home.css'
import {headerItems} from '../../utils/ProductsData';

const Home = () => {
  return (
    <div>
        <div className='item-container'>
            {headerItems && headerItems.map((item, index) => 
              <p> {item} </p> 
              )}
        </div>
    </div>
  )
}

export default Home