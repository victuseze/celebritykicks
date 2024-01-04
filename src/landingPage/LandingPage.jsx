import React from 'react'
import './landingPage.css'
import Hero from '../assets/hero-image.png'

function LandingPage() {
  return (
    <div className='entire'>
        <div className="upper">
            <div className="navbar">
                <div className="logo">
                    <h2>CLB Kicks</h2>
                </div>
                <nav>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Services</a></li>
                </nav>
            </div>
        </div>
        <div className="hero-page">
            <div className="hero-text">
                <h2>Confidence In Every Step</h2>
                <h2>Footwear for <span>Go-getters</span></h2>
                <button>Go Shopping</button>
            </div>
            <div className="hero-image">
                <img src={Hero} alt="" />
                <p>...Transforming every step into a legacy</p>
            </div>
        </div>
        <div className="dark">
            
        </div>
    </div>
  )
}

export default LandingPage