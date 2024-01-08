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
            <marquee behavior="scroll" direction="left">Scrolling text goes here</marquee>

        </div>

        {/* Category */}
        <div className="categories">
            <div className="categories-header">
                <h2>Categories</h2>
            </div>
            <div className="categories-body">
                <div className="sec_1">
                    <div className="cat-g sneakers">
                        <h3>Sneakers</h3>
                        <img src={Hero} alt="" />
                    </div>
                    <div className="cat-g dress-shoe">
                        <h3>Dress Shoe</h3>
                        <img src={Hero} alt="" />
                    </div>
                    <div className="cat-g boots">
                        <h3>Boots</h3>
                        <img src={Hero} alt="" />
                    </div>
                </div>
                <div className="sec_2">
                    <div className="cat-g trainers">
                        <h3>Trainers</h3>
                        <img src={Hero} alt="" />
                    </div>
                    <div className="cat-g slider">
                        <h3>Slides</h3>
                        <img src={Hero} alt="" />
                    </div>
                    <div className="cat-g sandals">
                        <h3>Sandals</h3>
                        <img src={Hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage