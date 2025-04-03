import React from 'react'
import "./Footer.css"
import product from "../../Assets/Images/product.svg"
import delivery from "../../Assets/Images/delivery.svg"
import discount from "../../Assets/Images/discount.svg"
import market from "../../Assets/Images/market.svg"
import logo from "../../Assets/Images/Logo.png"
import appstore from "../../Assets/Images/appstore.svg"
import playstore from "../../Assets/Images/playstore.svg"
import payment from "../../Assets/Images/1.png"
import {FiHome, FiMail} from "react-icons/fi"
import {BsTelephone} from "react-icons/bs"
import {FaFacebookF, FaTwitter, FaInstagram ,FaPinterestP} from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <footer>
      <div className='Top-Footer'>
        <div className='OSP'>
          <img src={product} alt="product" />
          <p>Every Fresh Products</p>
        </div>
        <div className='OSP'>
          <img src={delivery} alt="Delivery" />
          <p>Free Delivery For Order Over $50</p>
        </div>
        <div className='OSP'>
          <img src={discount} alt="Discount" />
          <p>Daily Mega Discounts</p>
        </div>
        <div className='OSP'>
          <img src={market} alt="Market" />
          <p>Best Price On The Market</p>
        </div>
      </div>
      <div className='Main-Footer'>
        <div className='footer-logo'>
          <img src={logo} />
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.</p>
          <a href="#"><FiHome /><p>Building Number 22 Sector 40, Greater Noida UP</p></a>
          <a href='mailto:support@fastkart.com'><FiMail /><p>support@fastkart.com</p></a>
        </div>
        <div className='Categories'>
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">Cake</a>
            </li>
            <li>
              <a href="">Pastries</a>
            </li>
            <li>
              <a href="">
                Bread
              </a>
            </li>
            <li>
              <a href="">
                Snacks
              </a>
            </li>
            <li>
              <a href="">
                Namkeens
              </a>
            </li>
          </ul>
        </div>
        <div className='Useful-Links'>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Shop</a>
            </li>
            <li>
              <a href=''>About Us</a>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='Help-Center'>
          <h4>Help Center</h4>
          <ul>
          <li>
            <a href=''>Your Order</a>
          </li>
          <li>
            <a href=''>Your Account</a>
          </li>
          <li>
            <a href=''>Track Order</a>
          </li>
          <li>
            <a href=''>Your Wishlist</a>
          </li>
          <li>
            <a href=''>Search</a>
          </li>
          <li>
            <a href=''>FAQ</a>
          </li>
          </ul>
        </div>
        <div className='Contact-Us'>
          <h4>Contact Us</h4>
          <div className='contact-details'>
            <div className='icon'>
              <BsTelephone />
            </div>
            <div className='contact-data'>
              <p>Hotline 24/7 :</p>
              <p>+91 888 104 2340</p>
            </div>
          </div>
          <div className='contact-details'>
            <div className='icon'>
              <FiMail />
            </div>
            <div className='contact-data'>
              <p>Email Address :</p>
              <p>fastkart@hotmail.com</p>
            </div>
          </div>
          <div className='download-app'>
            <p>Download App :</p>
            <div>
              <a href=""><img src={playstore} alt="Google play" /></a>
              <a href=""><img src={appstore} alt="App Store" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='Footer-credit'>
        <div>©2020-{currentYear} Ravi Sharma All rights reserved</div>
        <div><img src={payment} alt="payment" /></div>
        <div>Stay connected :
         <a href="#"> <FaFacebookF /></a>
          <a href="#"><FaTwitter /> </a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaPinterestP /></a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
