import "./landing.css";
import "../components/navbar/navbar";
import "../components/heading/heading";
import { Link } from "react-router-dom";
import headerimage from "../../images/covid.png";
import communicable from "../../images/communicable  diseae 1.png";
import check from "../../images/checkup.png";
import pills from "../../images/pills.png";
import { IconButton } from "@material-ui/core";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import "../components/footer/footer";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Heading from "../components/heading/heading";

function Landing() {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div>
        <Heading image={headerimage} />
      </div>
      <div id="P-diseases">
        <p>Diseases</p>
      </div>
      <hr />
      <div className="content-container">
        <h2>FIGHT COMMUNICABLE DISEASES</h2>
        <div className="content-description">
          <div>
            <img src={communicable} />
          </div>
          <div className="para1">
            <p>
              Track record. Telell. Green retailing. Hashtag. Megal. Sena.
              Tevis. Povihet. Hackathon. Prejafanat. Enism. Euronade.
              Innovation. Ansvarsfull. Retweeta. Väl. Antropopod. Smarketing.
              Epitropi. Laheten. Vibagisk. Rände. Nyrade. Teleck. Digitala
              assistenter. Geska. SEO. Dedås. Elin Nyberg. UX. Dobyfusk. Prost.
              Heteromatisk. Gigekonomi. Britt Persson. Pybessade.
            </p>
            <button type="submit">
              <Link to="/news">Know More</Link>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="content-container2">
        <h2>
          REDUCE MORTALITY FROM NON-COMMUNICABLE DISEASES AND PROMOTE MENTAL
          HEALTH
        </h2>
        <div className="content-description conte2">
          <div className="para1">
            <p>
              Track record. Telell. Green retailing. Hashtag. Megal. Sena.
              Tevis. Povihet. Hackathon. Prejafanat. Enism. Euronade.
              Innovation. Ansvarsfull. Retweeta. Väl. Antropopod. Smarketing.
              Epitropi. Laheten. Vibagisk. Rände. Nyrade. Teleck. Digitala
              assistenter. Geska. SEO. Dedås. Elin Nyberg. UX. Dobyfusk. Prost.
              Heteromatisk. Gigekonomi. Britt Persson. Pybessade.
            </p>
            <button type="submit">
              <Link to="/news">Know More</Link>
            </button>
          </div>
          <div>
            <img src={check} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="content-container3">
        <h2>
          SUPPORT RESEARCH, DEVELOPMENT AND UNIVERSAL ACCESS TO AFFORDABLE
          VACCINES AND MEDICINES
        </h2>
        <div className="content-description conte3">
          <div>
            <img src={pills} alt="" />
          </div>
          <div className="para1">
            <p>
              Track record. Telell. Green retailing. Hashtag. Megal. Sena.
              Tevis. Povihet. Hackathon. Prejafanat. Enism. Euronade.
              Innovation. Ansvarsfull. Retweeta. Väl. Antropopod. Smarketing.
              Epitropi. Laheten. Vibagisk. Rände. Nyrade. Teleck. Digitala
              assistenter. Geska. SEO. Dedås. Elin Nyberg. UX. Dobyfusk. Prost.
              Heteromatisk. Gigekonomi. Britt Persson. Pybessade.
            </p>
            <button type="submit">
              <Link to="/news">Know More</Link>
            </button>
          </div>
        </div>
        <div className="arrows">
          <IconButton>
            <RiArrowLeftSLine color="#b1d191" />
          </IconButton>
          1
          <IconButton>
            <RiArrowRightSLine color="#b1d191" />
          </IconButton>
        </div>
      </div>

      {/* Footer */}

      <div className="navbar nav2">
        <Navbar />
      </div>
      <div className="footer-image"></div>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
