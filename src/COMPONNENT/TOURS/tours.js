import React from "react"
import './tours.css';
import imge2 from './1210-10.jpg';
import imge3 from './1210.jpg';
import {FaRegStar } from "react-icons/fa";
function Tours() {
    return (
<div className="tour continer">
<div className= "seContainer">
<span  className=" sectitle">
    Hot Tours 
</span>

<div className="tourcountainer ">
    <div className="singletour grid">
        <div className="imgDev">
        <img src={imge2} alt=""/>
                      
        </div>
        <div className="tourinfo">
            <span className="tourtitle">
                Spain, Benidorm
            </span>
            <div className="start-review">
                <div className="stars">
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
                </div>
                <small className="=custrevier">
                    2 Customer River 
                </small>
            </div>
            {/*  */}
            <div className=" p "> spain a country eroup ibrian peninusula 
                ,includes 17 autonomous regions with driverse
             georgeraphy and cultures .capital city</div>
             {/*  */}
             <br></br>
          <button className=" btn1 ">Buy This Tour</button>
        </div>
        <span className="price">
            $790
        </span>
    </div>


    <div className="singletour grid">
        <div className="imgDev">
        <img src={imge3} alt=""/>
                      
        </div>
        <div className="tourinfo">
            <span className="tourtitle">
                Spain, Benidorm
            </span>
            <div className="start-review">
                <div className="stars">
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
            <FaRegStar className="icon" />
                </div>
                <small className="=custrevier">
                    2 Customer River 
                </small>
            </div>
            {/*  */}
            spain a country eroup ibrian peninusula 
                ,includes 17 autonomous regions with driverse
             georgeraphy and cultures .capital city
             {/*  */}
             <br></br>
          <button className="btn1">Buy This Tour</button>
        </div>
        <span className="price">
            $790
        </span>
    </div>

</div>

</div>
</div>
    ) 
       }
          export default Tours;
