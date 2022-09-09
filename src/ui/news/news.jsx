import React from "react";
import './news.css'
import injection from "../../images/injection.jpg"
import logo from "../../images/logoUN.jpg"

export default function News() {
    return (
        <div className="news-content">
            <div className="news">
                <h3>REDUCE MORTALITY FROM NON-COMMUNICABLE DISEASES AND PROMOTE MENTAL HEALTH</h3>
                <img src={injection} alt="" className="main-img"/>
                <p>Science park. Lean startup. Outbound marketing. Somår. </p>
                <img src={logo} alt="" className="logoUN"/>
                

            </div>
            <div className="ads">
                ads
            </div>
        </div>
    )
}