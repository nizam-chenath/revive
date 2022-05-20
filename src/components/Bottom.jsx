import React from 'react'

const Bottom = () => {
  return (
    <div className="bottom-section">
        <div className="picture-box">
            <div className="box">
                <div className="image">
                    <img src="Images/Img1.jpg" alt="" />
                </div>
                <div className="details">
                    <h3>Lorem ipsam</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum velit veniam quo et itaque, alias voluptate amet voluptates ratione quasi a asperiores ipsum ducimus qui labore dignissimos, quidem nisi corrupti? Perspiciatis unde similique omnis a distinctio aliquid iste labore quidem sapiente maiores voluptatibus, consequatur, minus sunt, eius placeat nisi?</p>
                </div>
            </div>
        </div>
        <div className="indicator"><span>...</span></div>
        <div className="btn">
            <img src="Images/arrowbtn.svg" alt="" />
        </div>
    </div>
  )
}

export default Bottom