import React from 'react'

const Card = ({img,rating}) => {
  return (
    <div className="card">
        <div className="image-section">
            <img src={img} alt="" />
        </div>
        <div className="rating-section">
            <h3>{rating}</h3>
            <button>Read</button>
        </div>
    </div>
  )
}

export default Card