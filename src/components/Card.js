import React from "react"
import cardImage from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <h4>SOLD OUT</h4>
            <img src={cardImage} alt="card" className="card--image" />
            <div className="card--stats">
                <img className="card--star" src={star} alt="star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
