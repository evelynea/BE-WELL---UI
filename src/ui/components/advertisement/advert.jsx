import React from 'react'
import "./advert.css"
import adv1 from "../../../images/advertisment 1.png";
import adv2 from "../../../images/advertisment 2.png";
import adv3 from "../../../images/advertisment 3.png";
export default function Advert() {
  return (
    <div className='advertisement'>
           <h2>Advertisement</h2>
           <img src={adv3} alt="adv" id="ad1"/>
           <img src={adv1} alt="" id="ad2"/>
           <img src={adv2} alt="" id="ad3"/>
    </div>
  )
}
