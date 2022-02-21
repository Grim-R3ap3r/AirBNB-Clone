import React from 'react'
import star from "../assets/Star.png"


export default function Card(props) {
  let badgeText
if(props.openspots===0)
{badgeText="SOLD OUT"}
else if(props.location==="Online")
{badgeText="ONLINE"}
console.log(badgeText)
  return (
    <div className="card">
      
     { badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.cardimg} className="card--image"></img>
        <div className="card--stats">
             <img className="card--star"src={star}></img>
             <span>{props.rating}</span>
             <span className="gray">({props.reviewcount})</span>
             <span className="gray">{props.country}</span>

        </div>
        <p className="card--title">{props.title}  </p>
        <p><span className="Bold">From ${props.price}</span>/person</p>


    </div>
  )
}
