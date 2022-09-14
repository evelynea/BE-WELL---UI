import React from "react";
import "./home.css";
import Navbar from "./components/navbar/navbar";
import Heading from "./components/heading/heading";
import child from "../images/Child.png";
import Bulletin from "./components/recentbulletin/bulletin";
import Footer from "./components/footer/footer";
import Advert from "./components/advertisement/advert";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Heading image={child} />
      </div>
      <div className="container-2">
        <div className="bulle">
          <h1>Recent Bulletin</h1>
          <Bulletin />
        </div>
        <div className="ad">
          <Advert />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
