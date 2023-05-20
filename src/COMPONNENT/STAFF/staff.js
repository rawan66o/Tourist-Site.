import React from "react";
import'./staff.css';

import imeo from './2546.jpg';
function staff() {
    return (
        <div className="staff">
            <div className=" seccountainer ">
                    <div className="f">
                     Diffrent Pepole-One Mission  
                   </div>
                    <div className="staffcountainer">
                        <div className="singlestaffe">
                            <div className="imgdivo">
                      <img src={imeo} alt=" "/>
                            </div>
                          
                            <span className="name">
                                Nicle Charmain
                            </span>

                            <span className="jobtitle">
                                CEO Wonder
                            </span>



                            <span className="contact">
                                +963 9 944 84243
                            </span>

                        </div>
                    </div>
            </div>
        </div>
    )
       }
          export default staff;
