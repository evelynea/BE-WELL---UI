import "./landing.css";
import communicable from "../../images/communicable  diseae 1.png";
import check from "../../images/checkup.png";
import pills from "../../images/pills.png"
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IconButton } from "@material-ui/core";
import {RiArrowLeftSLine} from "react-icons/ri";
import {RiArrowRightSLine} from "react-icons/ri"

function Landing() {
  return (
    <div className="container">
      <div className="navbar">
        <p>Do You Have An Idea For Be Well To Cover? Submit It Here!</p>
      </div>
      <div className="heading">
        <div className="header">
          <h2>Language </h2>
          <IconButton>
            <IoIosArrowForward className="iconheader" />
          </IconButton>
        </div>
        <div className="image-container"></div>
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
            <a href="/">Diseases</a>{" "}
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
          <input type="text" placeholder="Type what you’re looking for" />
        </div>
      </div>
      <div id="P-diseases">
        <p>Diseases</p>
      </div><hr/>
      <div className="content-container">
          <h2>FIGHT COMMUNICABLE DISEASES</h2>
        <div className="content-description">
          <div>
          <img src={communicable} />
          </div>
          <div className="para1">
          <p>
            Track record. Telell. Green retailing. Hashtag. Megal. Sena. Tevis.
            Povihet. Hackathon. Prejafanat. Enism. Euronade. Innovation.
            Ansvarsfull. Retweeta. Väl. Antropopod. Smarketing. Epitropi.
            Laheten. Vibagisk. Rände. Nyrade. Teleck. Digitala assistenter.
            Geska. SEO. Dedås. Elin Nyberg. UX. Dobyfusk. Prost. Heteromatisk.
            Gigekonomi. Britt Persson. Pybessade.
          </p>
          <button type="submit">Know More</button> 
          </div> 
        </div>
      </div><hr/>
      <div className="content-container2">
          <h2>REDUCE MORTALITY FROM NON-COMMUNICABLE DISEASES AND PROMOTE MENTAL HEALTH</h2>
        <div className="content-description conte2">
          <div className="para1">
          <p>
            Track record. Telell. Green retailing. Hashtag. Megal. Sena. Tevis.
            Povihet. Hackathon. Prejafanat. Enism. Euronade. Innovation.
            Ansvarsfull. Retweeta. Väl. Antropopod. Smarketing. Epitropi.
            Laheten. Vibagisk. Rände. Nyrade. Teleck. Digitala assistenter.
            Geska. SEO. Dedås. Elin Nyberg. UX. Dobyfusk. Prost. Heteromatisk.
            Gigekonomi. Britt Persson. Pybessade.
          </p>
          <button type="submit">Know More</button> 
          </div>
          <div>
          <img src={check} />
          </div> 
        </div>
      </div><hr/>
      <div className="content-container3">
          <h2>SUPPORT RESEARCH, DEVELOPMENT AND UNIVERSAL ACCESS TO AFFORDABLE VACCINES AND MEDICINES</h2>
        <div className="content-description conte3">
          <div>
          <img src={pills} />
          </div>
          <div className="para1">
          <p>
            Track record. Telell. Green retailing. Hashtag. Megal. Sena. Tevis.
            Povihet. Hackathon. Prejafanat. Enism. Euronade. Innovation.
            Ansvarsfull. Retweeta. Väl. Antropopod. Smarketing. Epitropi.
            Laheten. Vibagisk. Rände. Nyrade. Teleck. Digitala assistenter.
            Geska. SEO. Dedås. Elin Nyberg. UX. Dobyfusk. Prost. Heteromatisk.
            Gigekonomi. Britt Persson. Pybessade.
          </p>
          <button type="submit">Know More</button> 
          </div> 
        </div>
        <div className="arrows">
        <IconButton>
            <RiArrowLeftSLine color="#b1d191"/>
        </IconButton>
            1
        <IconButton>
          <RiArrowRightSLine color="#b1d191"/>
        </IconButton>
        </div>
      </div>
      <div className="navbar nav2">
        <p>Do You Have An Idea For Be Well To Cover? Submit It Here!</p>
      </div>
    </div>
  );
}

export default Landing;
