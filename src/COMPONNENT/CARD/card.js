import React from "react"
import './card.css';
import cardimge1 from'./Ballon.png';
import cardimge2 from'./Sunset-beach.jpg';
import cardimge3 from'./1210-1.jpg';
import { FaArrowRight } from "react-icons/fa";

function Card() {
    return (
        <div className=" cards">
            <div className="cardContainer container grid">
                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={cardimge1} alt=""></img>
                    </div>

                    <h4 className="textDiv">
                        Ballon Flieght
                    </h4>
                </div>

                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={cardimge2} alt=""/>
                      

                    </div>

                    <h4 className="textDiv">
                      Beach Travels
                    </h4>
                </div>



                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={cardimge3} alt=""></img>
                    </div>

                    <h4 className="textDiv">
            Mountain Tours
                    </h4>
                </div>

            </div>

            <div className="SpanText flex">
                Other Tours<FaArrowRight className="icon"/> 
            </div>
      
        </div>
    )
       }
          export default Card;
