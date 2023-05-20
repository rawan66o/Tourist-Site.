import React from "react";
import './fotter.css';
import { FaPhoneVolume } from "react-icons/fa";
import {FaRegEnvelope} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaYoutubeSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
        <div className="seccountainer ">
            <div className="content">
                <div className="row">
                    <div className="spantext">
                        COUNTACT US
                    </div>
                    <div className="contactdiv">
                        <span className="flex " >
                    <FaPhoneVolume className="icon"/>
                     <span>_</span> <span>+963 956 7384</span>
            </span>


            <span className="flex " >
                    <FaRegEnvelope className="icon"/>
                    <span>_</span>   <span>rawan@gmail.com</span>
            </span>




            <span className="flex " >
                    <FaPhoneVolume className="icon"/>
                    <span>_</span> <span> +963 964 709125 </span> 

            </span>


                    </div>
                </div>
                <div className="row">
                    <div className="spantext">
                        POPULAR NEWS
                    </div>
                    <div className="singlenews">
                        <span className="text">
                            your personal guid to the most places to visit in the world
                        </span>
                        <div className="p"> JAN ,04,2023</div> 
                    </div>


                    <div className="singlenews">
                        <span className="text">
                          the grand reveal of the most iconic hotel in the world .Atlantis the royal
                        </span>
                        <div className="p"> JAN ,20,2023</div> 
                    </div>



                </div>
                <div className="row">
                    <div className="spantext">
                        QUICK LINKS
                    </div>
                    <div className="footerlinks">
                        <ul>
                            <li className="li">About Us</li>
                            <li className="li">Our Team</li>
                            <li className="li">Gallery</li>
                            <li className="li">Blog</li>
                            <li className="li">Careers</li>
                        </ul>
                    </div>
                </div>
                </div> 
         <div className="btndiv">
            <div className="p2">Copyright 2023 Isratech .All Right Reserved  </div>
         <div className="socialflex">
            <FaFacebookF className="icon"/>
            <FaTwitter className="icon"/>
            <FaYoutubeSquare className="icon"/> 
            <FaInstagram className="icon"/>
           </div>
           Privacy Policy
         </div>
          
        </div>
        </div>
    )
       }
          export default Footer;
         