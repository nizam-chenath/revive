import React from 'react'
import data from "../Datas/Data.json"
import Card from './Card'

const Rating = () => {
  return (
    <div className="rating">
        <div className="top-section">
            <h1>Checkout latest reviews</h1>
            <p>see more </p>
        </div>
        <div className="cards">
            {data.map((items)=>(

           <Card img={items.img} rating={items.rating}/>
            ))}
        </div>
    </div>
  )
}

export default Rating