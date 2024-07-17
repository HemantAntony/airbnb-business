import React from "react"
// import cardImage from "../images"
import star from "../images/star.png"

export default function Card({img, rating, reviewCount, location, title, price}) {
    return (
        <div className="card">
            <img src={`./images/${img}`} alt="card" className="card--image" />
            <div className="card--stats">
                <img className="card--star" src={star} alt="star"/>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}
