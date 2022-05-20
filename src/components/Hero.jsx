import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero">
        <div className="content-section">
            <div className="nav-section">
              <h2>Discovery <img src="Images/down.svg" alt="" /></h2>
              
              <div className="nav-items">
                <div className="login">
                  <p>Login</p>
                  <img src="Images/searchimg.svg" alt="" />
                </div>
                <div className="search">
                  <p>Search</p>
                  <img src="Images/searchimg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="contents">
                  <h1>join Discovery,<br /> <span>the new Community <br /> for book lovers</span></h1>
                  <div>
                    <button> 
                      Go to Discovery
                      <img src="Images/externallink.svg" alt="" />
                    </button>
                  </div>
                  <p>Trust Book Recommendations from real people, not robots 🤓</p>
              </div>
            </div>
        </div>
            <img src="Images/Img3.png" alt="" />
    </div>
  )
}

export default Hero