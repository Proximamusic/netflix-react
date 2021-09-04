import React, { useState,useEffect } from 'react'
import "./navbar.css"

function Navbar() {
    const[scroll, setScroll] = useState(false);
    // console.log(window.scrollY);
    const handleScroll = ()=>{
        if(window.scrollY > 200){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll' ,handleScroll)
        }
    }, [])
    return (
        <div className="navbar" style={{backgroundColor: scroll?'transparent':'black'}}>
             <img className='navbar-image' src="/images/netflix-logo.png" alt="" />
        <div className="navbar-buttons">
            <select className='btn navbar-languages' name="Language" id="lang">
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
                </select>
            <button className=" btn btn-sign-in">
                Sign in 
            </button>
        </div>
        </div>
    )
}

export default Navbar
