import React from 'react';
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName , setbtnName ] = useState("login")
  return (
    <div className="flex justify-between">
        <div className="logo-container">
        <img className="w-36" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className=' flex p-4 m-4'>
                <li className='px-4'><Link to="/">Home</Link></li>
                <li className='px-4'><Link to="/about">About Us</Link></li>
                <li className='px-4'><Link to="/contact">Contact</Link></li>
                <li className='px-4'>Cart</li>
                <button className='login-btn' onClick={()=>{
                btnName === "Login" ? setbtnName("Logout"): setbtnName("Login") ;
                }} >{btnName}</button>
            </ul>

        </div>
    </div>
  )
}

export default Header