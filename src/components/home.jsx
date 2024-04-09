import React from 'react'
import "./comp.css"
import carphoto1 from "../assets/carphoto1.jpg"
const Home = () => {
  return (
    <>
    <main id="home">
            <div className="main-text">
                <div className="main-hero-text">
                    <h1>Do you want to <p className="color-font">track</p> your <p className="color-font">car?</p>
                    </h1>
                </div>
                <div className="main-hero-para">
                    <p>Discover the power of real-time vehicle management with our product. Track your fleet's every
                        move and set virtual boundaries with our cutting-edge live tracking and geofencing features</p>
                </div>
                <div className="main-hero-btn">
                    <button className="button"><a href="">Track live</a></button>
                    <button className="button1"><a href="#contact">Get support</a></button>
                </div>
            </div>
            <div className="main-car">
                <img src={carphoto1} alt="car photo"/>
            </div>
        </main>
    </>
  )
}

export default Home