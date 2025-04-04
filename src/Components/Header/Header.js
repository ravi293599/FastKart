import React, { useReducer, useState } from 'react'
import "./Header.scss"
import {toast} from "react-toastify";
import { IoIosArrowDown } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import Logo from "../../Assets/Images/Logo.png"
import cart1 from "../../Assets/Images/cart1.png"
import cart2 from "../../Assets/Images/cart2.png"
import Popup from '../PopUps/Popup';
// import {useSelector,useDispatch} from 'react-redux'
// import { logout } from '../../store/slices/authSlice';
// import { useNavigate } from 'react-router';

const Header = () => {
  const [showPopup, setShowpopup] = useState(false)
  const [login, setLogin] = useState(false)
  const Islogout = () =>{
    // dispatch(logout())
    setLogin(false);
    console.log("Logout triggered")
    //toast.success('Logged Out Successfully');
    //navigate('/login')
  }
  return (
    <header>
      <div className='Main-header'>
        <div className='Logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='Location'>
          <button className='Location-btn' onClick={() => setShowpopup(true)}>
          <span className="location-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </span>
          <span className='Location-text'>Your Location</span>
          <span className='Location-icon'>
          <IoIosArrowDown />
          </span>
          </button>
          {showPopup && <Popup showPopup={setShowpopup} />}
        </div>
        <div className='Search'>
          <input type="search" className='search-bar' placeholder="I'm searching for..." />
          <button className='search-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
        <div className='Header-icons'>
          <div className='delivery-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <div className='delivery-content'>
              <p>24/7 Delivery</p>
              <p>+91 987 896 9656</p>
            </div>
          </div>
          <div className='Like-icon'>
            <a href='/wishlist'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </a>
          </div>
          <div className='cart-icon'>
            <div className='cart-div'>
              <button className='cart-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span className='cart-item-quantity'>2</span>
              </button>
              <div className='cart-expension'>
                <div className='cart-items'>
                  <div className='item-image'>
                    <img src={cart1} alt="item" />
                  </div>
                  <div className='item-data'>
                    <span className='item-close'><IoCloseSharp /></span>
                    <h4>Fantasy Crunchy Choco</h4>
                    <p>1<span>X</span>$80.58</p>
                  </div>
                </div>
                <div className='cart-items'>
                  <div className='item-image'>
                    <img src={cart2} alt="item" />
                  </div>
                  <div className='item-data'>
                    <span className='item-close'><IoCloseSharp /></span>
                    <h4>Fantasy Crunchy Choco</h4>
                    <p>1<span>X</span>$80.58</p>
                  </div>
                </div>
                <div className='cart-price'>
                  <div className='Total-price'>
                    <p>Total:</p>
                    <p>$106.58</p>
                  </div>
                  <div className='checkout'>
                    <a href="/cart" className='btn-secondary'>View Cart</a>
                    <a href="/checkout" className='btn-primary'>Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='user-icon'>
            <div className='user-div'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <div className='user-details'>
                <p>Hello,</p>
                <p>My Account</p>
              </div>
            </div>
            <div className='user-login'>
              {!login && <ul>
                <li>
                <a href='/login'>Login</a>
                </li>
                <li>
                  <a href='/register'>Register</a>
                </li>
                <li>
                  <a href='/forgetPassword'>Forget Password</a>
                </li>
              </ul>}
              {login && <ul>
                <li>
                  <span>Your Profile</span>
                </li>
                <li>
                  <span>Your Orders</span>
                </li>
                <li>
                <span onClick={Islogout}>Logout</span>
                </li>
              </ul>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header