import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar(props) {
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
             <Link to="/"><img className='navbar-image' src="/images/netflix-logo.png" alt="" /></Link>
        <div className="navbar-buttons" style={{display: props.login &&"none"}}>
            <select className='btn navbar-languages' name="Language" id="lang">
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
                </select>
            <button className=" btn btn-sign-in">
               <Link to='/login' className='sign-in'> Sign in </Link>
            </button>
        </div>
        </div>
    )
}

export default Navbar
