import React from 'react'
import './loginpage.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
function LoginPage() {

    const submitForm = (e) =>{
            // e.preventDefault();
    }
    return (
        <div className="loginpage">
            <Navbar login={true}/>
                 <div className="loginpage-form">
                 <form>
                     <h1 className="loginpage-form-heading">Sign in</h1>
                     <input className='input' type="email" name="email" id="email" placeholder='Enter your email' />
                     <input className='input' type="password"  id="password"placeholder='Enter your password' />
                     <Link className='submit' to='/home'><button onClick={submitForm}className='btn  btn-lg '>Sign In</button></Link>

                     <input className='check' type="checkbox" id='check' /><label htmlFor="check">Remember Me</label>
                 </form>
                 </div>
        </div>
    )
}

export default LoginPage
