import React from 'react'
import { IoMdArrowDropdown, IoIosArrowForward } from 'react-icons/io';

 function Cart() {
  return (
    <div className='my-cart'>
        <img src={require('../image/bg-img.png')} alt="img" width="300px"/>

        <div className='content'>
              <div className='cart-container'>
                  <div className='left-view'>
                      <img src={require('../image/image1.png')} alt="img" width="300px" height="200px" />
                      <div className='info'>
                          <h1>Tesla Powerwall <span>Battery</span></h1>
                          <span>SKU: GTYS - 12488R</span>
                          <span>Color: <b>White</b></span>
                          <h3><b>Elegant </b>Compact design</h3>
                          <h3><b>Scalability </b>up to 10 Powerwalls</h3>
                          <h3>13.5 Kwh storage capacity available</h3>
                      </div>

                  </div>
                  <div className="right-view">
                      <h3><b>Quantity: </b>Compact design</h3>
                      <h3><b>Amount </b>KES. <span>75,000</span></h3>
                  </div>
              </div>
              <div className='controls'>
                  <button>
                      Continue Shopping
                      <IoIosArrowForward />
                  </button>
                  <button>
                      View Cart & Checkout
                      <IoIosArrowForward />
                  </button>
              </div>

        </div>
    </div>
  )
}

export default Cart;