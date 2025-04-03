import React, { useState } from 'react'
import LoginHeader from '../../LoginHeader/LoginHeader'
import cart1 from "../../../Assets/Images/cart1.png"
import "./Cart.css"
import {HiOutlineArrowNarrowLeft} from "react-icons/hi"

const Cart = () => {
    const [cart, setCart] = useState({})
  return (
    <>
      <LoginHeader heading="Cart" pageName="Cart" />
      <div className='Cart-container'>
        <div className='Cart-div'>
            <div className='Cart-row'>
                <div className='Cart-col'>
                    <img src={cart1} alt="Item" />
                </div>
                <div className='Cart-col'>
                    <h4>Bell pepper</h4>
                    <span>
                    <p>Sold By: <span>Fresho</span></p>
                    <p>Quantity: <span>500 g</span></p>
                    </span>
                </div>
                <div className='Cart-col'>
                    <p>Price</p>
                    <span className='item-pricing'>
                        <p>$35.10 <strike>$45.68</strike></p>
                        <p>You Save: $20.68</p>
                    </span>
                </div>
                <div className='Cart-col'>
                    <p>Qty</p>
                    <div className='quantity-ctrlBtn'>
                        <span className='decrement'></span>
                        <span className='quantity'>1</span>
                        <span className='increment'></span>
                    </div>
                </div>
                <div className='Cart-col'>
                    <p>Total</p>
                    <h3>$35.10</h3>
                </div>
                <div className='Cart-col'>
                    <p>Action</p>
                    <div className='Cart-ctrlBtn'>
                        <a href="#">Save for later</a>
                        <a href="#">Remove</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='Cart-price'>
            <div className='price-top'>
                <h3>Cart Total</h3>
            </div>
            <div className='price-middle'>
                <p>Coupon Apply</p>
                <div className='coupon'>
                    <input type="search" className='search-bar' placeholder="Enter Coupon Code Here..." />
                    <button className='search-btn'>
                    Apply
                    </button>
                </div>
                <ul className='total-list'>
                    <li>
                        <span>Subtotal</span>
                        <span>$125.65</span>
                    </li>
                    <li>
                        <span>Coupon Discount</span>
                        <span>(-) 0.00</span>
                    </li>
                    <li>
                        <span>Shipping</span>
                        <span>$6.90</span>
                    </li>
                </ul>
            </div>
            <div className='price-bottom'>
                <ul className="total-list">
                    <li>
                        <h3>Total (USD)</h3>
                        <h3>$132.58</h3>
                    </li>
                </ul>
                <button type="submit" className="btn-form">
                    Process To Checkout
                </button>
                <button type="submit" className="btn-form">
                   <HiOutlineArrowNarrowLeft /> Return To Shopping
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart
