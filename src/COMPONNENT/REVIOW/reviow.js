import React from "react";
import './reviow.css';
import im from './screen-1.jpg';
import im2 from './1902-2.jpg';
import im3 from './1272-8.jpg';
function Reviow() {
    return (
        <div className="reviow">
            <div className="seccountainer">
                <span className="sectitle">
                    What Pepole Say

                </span>
                <div className="reviewcountainer">
                    <div className="singlereview">
                      <div className="imgdiv">
                        <img src={im} alt=" "/>
                      </div>
                    <div className="p">
                        we are happy about your choose  our web site to your join, we wish ahappy join..

                    </div>
                    <div className="name">
                        Rawan Khalifeh
                    </div>
                    

                    </div>
                    <div className="singlereview">
                      <div className="imgdiv">
                        <img src={im2} alt=" "/>
                      </div>
                    <div className="p">
                        we are happy about your choose  our web site to your join, we wish ahappy join..

                    </div>
                    <div className="name">
                       Haneen Abdulah
                    </div>
                    </div>
                    <div className="singlereview">
                      <div className="imgdiv">
                        <img src={im3} alt=" "/>
                      </div>
                    <div className="p">
                        we are happy about your choose  our web site to your join, we wish ahappy join..

                    </div>
                    <div className="name">
                      Elain Mohammed
                    </div>
                    </div>
                    </div>
                </div>
            </div>
      
    )
       }
          export default Reviow;
 