import React from 'react'
import "./heading.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IconButton } from "@material-ui/core";
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom';
export default function Heading(props) {
  const image=props.image;
  return (
  <div>
    <div className="heading">
    <div className="header">
      <h2>Language </h2>
      <IconButton>
        <IoIosArrowForward className="iconheader" />
      </IconButton>
    </div>

  
    <div className="image-container" style={{backgroundImage:`url(${props.image})`}}>
      
    </div>
    <div className="img-block">
      <h2>Most Popular</h2>
      <ul>
        <li>IMPLEMENT THE WHO FRAMEWORK CONVECTION ON TOBACCO CONTROL.</li>
        <li>
          UNIVERSAL ACCESS TO SEXUAL AND REPRODUCTIVE CARE, FAMILY PLANNING
          AND EDUCATION.
        </li>
        <li>
          REDUCE MORTALITY FROM NON-COMMUNICABLE DISEASES AND PROMOTE MENTAL
          HEALTH.
        </li>
      </ul>
    </div>
  </div>
  <div className="title">
    <h1>Be Well</h1>
    <IconButton ><AiOutlineMenu className="menu-icon"/></IconButton>
    <p>Tuesday, August 30, 2022</p>
  </div>
  <div className="icons-container">
    <div className="icons">
      <IconButton>
        <FaFacebookF color="6C6AC7" />{" "}
      </IconButton>
      <IconButton>
        <IoLogoInstagram color="C66565" />{" "}
      </IconButton>
      <IconButton>
        <BsTwitter color="818DFF" />{" "}
      </IconButton>
      <IconButton>
        <MdEmail color="797235" />{" "}
      </IconButton>
    </div>
    <div className="active-tabs">
      <p>
        <Link to="/diseases">Diseases</Link>{" "}
      </p>
      <p>
        <a href="/">Drug</a>{" "}
      </p>
      <p>
        <a href="/">Family</a>{" "}
      </p>
    </div>
    <div className="search-icon">
      <IconButton>
        <FiSearch />
      </IconButton>
      <input type="text" placeholder="Type what you’re looking for"/>
    </div>
  </div>
  </div>
  )
}
