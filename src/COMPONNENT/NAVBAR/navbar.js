import React, { useState } from "react";
import './navbar.css'
import {FaEdge} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaCaretSquareRight} from "react-icons/fa";
import{FaBuromobelexperte}from"react-icons/fa";
// import {useState } from "react";
const navbar=()=> {  
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const[active,setActive]=useState('menudiv')
     const showNavBar=()=>{
        setActive('menudiv activeNavBAR')

    }
    const removeNavBar=()=>{
        setActive('menudiv')}
    return (
        <div>
            <div className="header flex">
                <div className="logoDiv">
                    <h3 className="logo">
                        Wonder

                    </h3>
                </div>
                <div className={active}>
                    <ul className="menulist">
                        <li className="navitem">
                            < a href="/" onClick={removeNavBar} className="menulink">Home</a>
                        </li>

                        <li className="navitem">
                            < a href="/" onClick={removeNavBar} className="menulink">About</a>
                        </li>
                            < a href="/" onClick={removeNavBar} className="menulink">Our Tours</a>
                        <li className="navitem">
                        </li>
                        <li className="navitem">
                            < a href="/" onClick={removeNavBar} className="menulink">Gallery</a>
                        </li>
                        <li className="navitem">
                            < a href="/" onClick={removeNavBar} className="menulink">Blog</a>
                        </li>
                        <li className="navitem">
                            < a href="/" onClick={removeNavBar} className="menulink">Contact Us</a>
                        </li>
                        <li className="navitem">
                            < a href="/" onClick={removeNavBar} className="menulink">Pages</a>
                        </li>
                                       </ul>

                    <div onClick={removeNavBar} className="closeNavbar">
                 <FaEdge className="icon"/>
                    </div>
                </div>

                 <div className="sociaiicon">
                   <FaFacebook className="icon"/>
                   <FaTwitter className="icon"/>
                   <FaInstagram className="icon"/>
                   <FaCaretSquareRight className="icon"/>
                 </div>
                 <div onClick={showNavBar} className="toggelNavbar">
                    <FaBuromobelexperte className="icon"/>
                </div>
            </div>
        </div>
    )
       }
          export default navbar;