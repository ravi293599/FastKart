import React, { useEffect, useState } from 'react'
import "./Shop.scss"
import LoginHeader from '../../LoginHeader/LoginHeader'
//import Item1 from "../../../Assets/Images/Item1.png"
import {AiOutlineEye, AiOutlineHeart, AiOutlinePlus} from "react-icons/ai";
import {IoIosGitCompare} from "react-icons/io";
import {BsDashLg} from "react-icons/bs";

const Shop = () => {
    let count = "";
    const [Items, setItems] = useState([])
    //const [itemList, setItemList] = useState([])
    const itemAdd = (id) => {
        //count = id;
        //console.log("the item is clicked"+ this.id );
        console.log("Item added")
    }
    const itemDelete = (id) => {
        console.log("Item deleted")
    } 
    const rate = [1,2,3,4,5];
    let ExactRating = "";
    const getData = () => {
        fetch('data.json',
        {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(function(response){
            //console.log(response)
            return response.json();
        })
        .then(function(myJson){
            // const data = JSON.parse()
            setItems(myJson)
        });
    }
    useEffect(() => {
        getData()
    },[])
  return (
    <>
      <LoginHeader heading="Shop" pageName="Shop" />
      <div className='Shop-container'>
        <div className='Sidebar'></div>
        <div className='Main-shop'>
            <div className='Sort-by'>
                <p>Sort By :</p>
                <select>
                    <option>Popularity</option>
                    <option>Low - High Price</option>
                    <option>High - Low Price</option>
                    <option>Average Rating</option>
                    <option>A - Z Order</option>
                </select>
            </div>
            <div className='Item-list'>
                { Items && Items.map((Item) => 
                    <div className='card-wrapper' key={Item.id}>
                    <div className='Item-cart'>
                        <div className='Item-image'>
                            <a href='#'>
                            <img src={Item.url} alt="Item" />
                            </a>
                        </div>
                        <div className='Item-content'>
                            <p>{Item.category}</p>
                            <a href='#'>
                            <h3>{Item.title}</h3>
                            </a>
                            <div className='Rating'>
                                <div className='Stars'>
                                    <ul>
                                        {
                                            rate.map((rate) => {
                                                ExactRating = Item.numericalRating.toFixed();
                                                let currentRate = rate;
                                                if(currentRate <= ExactRating){
                                                   return <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                    </li>
                                                }
                                                else{
                                                   return <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                    </li>
                                                }
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                                <div className='Numerical-rating'>({Item.numericalRating})</div>
                            </div>
                            <div className='Item-quantity'>{Item.size}</div>
                            <div className='Item-price'>
                                <span className='current-price'>{Item.currentPrice}</span>
                                <span className='old-price'><strike>{Item.oldPrice}</strike></span>
                            </div>
                            <div className='Add-section'>
                                <span  onClick={itemDelete} className='decrement'><BsDashLg/></span>
                                <span className='quantity-added'>Add</span>
                                <span  onClick={itemAdd} className='increment'><AiOutlinePlus /></span>
                            </div>
                        </div>
                    </div>
                    <div className='Item-hover'>
                        <div className='view'>
                            <AiOutlineEye />
                            <span className='tooltip'>
                                View
                            </span>
                        </div>
                        <div className='compare'>
                            <IoIosGitCompare />
                            <span className='tooltip'>
                                Compare
                            </span>
                        </div>
                        <div className='wishlist'>
                            <AiOutlineHeart />
                            <span className='tooltip'>
                                Wishlist
                            </span>
                        </div>
                    </div>
                </div>
                ) }
            </div>
        </div>
      </div>
    </>
  )
}

export default Shop
