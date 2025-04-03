import React from 'react'
import { IoCloseSharp } from "react-icons/io5"
import { ImSearch } from "react-icons/im"
import "./Popupp.scss"

const Popup = (props) => {
  return (
    <>
    <div className='overlay'>
        <div className='popup'>
            <div className='popup-header'>
                <h3>Choose your Delivery Location</h3>
                <p>Enter your address and we will specify the offer for your area.</p>
            </div>
            <div className='pop-close' onClick={() => props.showPopup(false)}>
                <IoCloseSharp />
            </div>
            <div className='popup-body'>
                <input type="search" className='search-bar' placeholder='Search Your Area' />
                <ImSearch className='search-icon' />
                <div className='select-location'>
                    <div className='location-text'><p>Select a Location</p></div>
                    <div className='location-scroll'>
                        <ul>
                            <li>
                                <div className='location'>Delhi</div>
                                <div className='price'>Min<span>&#8377;</span>250</div>
                            </li>
                            <li>
                                <div className='location'>Delhi</div>
                                <div className='price'>Min<span>&#8377;</span>250</div>
                            </li>
                            <li>
                                <div className='location'>Delhi</div>
                                <div className='price'>Min<span>&#8377;</span>250</div>
                            </li>
                            <li>
                                <div className='location'>Delhi</div>
                                <div className='price'>Min<span>&#8377;</span>250</div>
                            </li>
                            <li>
                                <div className='location'>Delhi</div>
                                <div className='price'>Min<span>&#8377;</span>250</div>
                            </li>
                            <li>
                                <div className='location'>Delhi</div>
                                <div className='price'>Min<span>&#8377;</span>250</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Popup