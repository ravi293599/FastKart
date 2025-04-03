import React, { useEffect } from 'react'
import "./Home.css"
import pods1 from "../../../Assets/Images/pods1.svg"
import pods2 from "../../../Assets/Images/pods2.svg"
import pods3 from "../../../Assets/Images/pods3.svg"
import pods4 from "../../../Assets/Images/pods4.svg"
import pods5 from "../../../Assets/Images/pods5.svg"
import pods6 from "../../../Assets/Images/pods6.svg"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {FaFacebookF} from "react-icons/fa"
import {IoLogoWhatsapp} from "react-icons/io"
import {BsArrowRightShort} from "react-icons/bs"
import {BiEnvelope} from "react-icons/bi"
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai"
import { useNavigate } from 'react-router'

const Home = () => {
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('name');
        if(username === "" || username === null){
            usenavigate('/login')
        }
    },[])
  return (
    <>
    <div className='row'>
        <div className='Hero-section'>
            <div className='left'>
                <div className='text-content'>
                    <p className='spl-text'>Fresh & Delicious</p>
                    <h3>Fresh Bread</h3>
                    <p>Bento box burritos cherry bomb pepper dark and stormy with ginger..</p>
                    <a href='#'>Shop Now <HiOutlineArrowNarrowRight /></a>
                </div>
            </div>
            <div className='right'>
                <div className='text-content'>
                    <p>Exclusive offer <span>30% Off</span></p>
                    <h3><span>WE'LL MAKE</span> HANDMADE <span>YOUR</span> SWEET</h3>
                    <p>Earl grey latte Thai basil curry grains alfalfa sprouts banana bread ginger carrot...</p>
                    <a href='#' className='btn-primary'>Shop Now <HiOutlineArrowNarrowRight /></a>
                </div>
            </div>
        </div>
        <div className='pods-container'>
            <a href='/shop' className='pods'>
                <img src={pods1} alt="pods" />
                <h5>Cake</h5>
            </a>
            <a href='/shop' className='pods'>
                <img src={pods2} alt="pods" />
                <h5>Sandwich</h5>
            </a>
            <a href='/shop' className='pods'>
                <img src={pods3} alt="pods" />
                <h5>Cookies</h5>
            </a>
            <a href='/shop' className='pods'>
                <img src={pods4} alt="pods" />
                <h5>Pie</h5>
            </a>
            <a href='/shop' className='pods'>
                <img src={pods5} alt="pods" />
                <h5>Bread</h5>
            </a>
            <a href='/shop' className='pods'>
                <img src={pods6} alt="pods" />
                <h5>Biscuits</h5>
            </a>
        </div>
        <div className='offer-row'>
            <h2>Get $3 Cashback! Min Order of $30</h2>
            <div className='coupon-code'>
                Use Code : GROCERY1920
            </div>
        </div>
        <div className='link-row'>
            <a href='#' className='link-card'>
                <div className='text-content'>
                    <p className='spl-text'>5% OFF</p>
                    <h5>New Items</h5>
                    <p>Daily Essentials</p>
                </div>
            </a>
            <a href='#' className='link-card'>
                <div className='text-content'>
                    <p className='spl-text'>5% OFF</p>
                    <h5>Save More</h5>
                    <p>Fresh Toast Rusk</p>
                </div>
            </a>
            <a href='#' className='link-card'>
                <div className='text-content'>
                    <p className='spl-text'>5% OFF</p>
                    <h5>Fresh Every Day!</h5>
                    <p>Delivery @ Home</p>
                </div>
            </a>
            <a href='#' className='link-card'>
                <div className='text-content'>
                    <p className='spl-text'>5% OFF</p>
                    <h5>Hot Deals</h5>
                    <p>Fresh Cake</p>
                </div>
            </a>
        </div>
        <div className='sale-row'>
            <div className='sale-content'>
                <h3>limited Time Offer</h3>
                <h2>Super</h2>
                <h1>sale</h1>
                <p>www.fastkart.com</p>
                <ul className='social-icon'>
                    <li>
                        <a href='#'>
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <IoLogoWhatsapp />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='CTA-container'>
            <div className='CTA-row'>
                <div className='CTA-content'>
                    <h3>Join Our Newsletter And Get...</h3>
                    <h4>$20 discount for your first order</h4>
                    <div className='Search'>
                        <input type="search" className='search-bar' placeholder="I'm searching for..." />
                        <div className='input-envelope'>
                        <BiEnvelope />
                        </div>
                        <button className='search-btn'>
                        Subscribe <BsArrowRightShort />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home