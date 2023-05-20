import React from "react";
import './discount.css';
// import vidio from './awesome-video.mp4';
import image8 from './1260.jpg';
function Discount() {
    return (
        <div className="discount section">
            <div className="setCountainer">
{/* <vidio src={vidio} className="vidio"  > </vidio> */}


<img src={image8} alt="" className="image8"></img>
<div className="textdiv">
    <span className="title">
        Sign Up For 35% Discount
    </span>
<span className="p" > want to get an instat discount for your next tour to any of your faivourite</span>
<div className="input">
    <input type="text" placeholder="Enter Your Email"/>
   
</div> <button className="btn1">Subscribe</button>
</div>
            </div>
    
        </div>
    )
       }
          export default Discount;