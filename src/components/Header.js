import React from 'react';
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName , setbtnName ] = useState("login")
  return (
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul className='res-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button className='login-btn' onClick={()=>{
                btnName === "Login" ? setbtnName("Logout"): setbtnName("Login") ;
                }} >{btnName}</button>
            </ul>

        </div>
    </div>
  )
}

export default Header