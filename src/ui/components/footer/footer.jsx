import React from "react";
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconButton } from "@material-ui/core";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footerPart-1">
        <div>
        <h2> Be Well</h2>
        </div>
        <div>
        <p>Rugando, 5 Location</p>
        <p>Kimihurura, 75007 Kigali Rwanda</p>
        </div>
        <div className="icons-f">
        <IconButton>
          <FaFacebookF color="B1D191" />{" "}
        </IconButton>
        <IconButton>
          <IoLogoInstagram color="B1D191" />{" "}
        </IconButton>
        <IconButton>
          <BsTwitter color="B1D191" />{" "}
        </IconButton>
        <IconButton>
          <MdEmail color="B1D191" />{" "}
        </IconButton>
        </div>
      </div>
      <div className="footerPart-2">
        <h2>Information</h2>
        <a href="privacy">About Us</a>
        <a href="privacy">Search More</a>
      </div>
      <div className="footerPart-3">
        <h2>Helpful Link</h2>
        <a href="privacy">Support</a>
        <a href="privacy">Terms and Condition</a>
        <a href="privacy">Privacy</a>
      </div>
      <div className="footerPart-4">
        <h2> Please Subscribe</h2>
        *Email
        <input
          type="email"
          name="email"
        />
        <button type="submit" value="Subscribe">
          {" "}
          Subscribe{" "}
        </button>
      </div>
    </div>
  );
}
