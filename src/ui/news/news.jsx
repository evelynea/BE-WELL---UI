import React from "react";
import "./news.css";
import diabetes from "../../images/diabetes.png";
import injection from "../../images/injection.jpg";
import logo from "../../images/logoUN.jpg";
import injection2 from "../../images/injection2.jpg";
import injection3 from "../../images/injection3.jpg";
import Navbar from "../components/navbar/navbar";
import Heading from "../components/heading/heading";
import Footer from "../components/footer/footer";
import {BsDot} from "react-icons/bs";
import {IoIosArrowDropdownCircle} from "react-icons/io"
import adv2 from "../../images/advertisment 2.png";
import adv3 from "../../images/advertisment 3.png";

export default function News() {
  return (
    <>
      <Navbar />
      <Heading image={diabetes} />
      <div className="news-content">
        <div className="news">
          <h3>
            REDUCE MORTALITY FROM NON-COMMUNICABLE DISEASES AND PROMOTE MENTAL
            HEALTH
          </h3>
          <img src={injection} alt="" className="main-img" />
          <p className="img-caption">
            Science park. Lean startup. Outbound marketing. Somår.{" "}
          </p>
          <div className="partners">
            <img src={logo} alt="" className="logoUN" />
            <div className="partners-info">
              <p>UN Rwanda</p>
              <p className="img-caption-2">Friday, April 12, 2022</p>
            </div>
          </div>
          <div className="news-words">
            <p>
              Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos{" "}
            </p>
            <p>
              Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade
              Nirade. Bekrona. Demigen. Bagon. Neliga. Rekyra. Postsiv. Antibel.
              Nide. Jätus. Missa. Maligen. Sav. Örar. Relaterade artiklar.
              Cynfili. Scale-up. Plar. Bes. Artificiell intelligens. Sologi.
              Radiocism. Krov. Giv. Develedes. Unika besökare. Kande. Gun
              Nyberg. Autonoma fordon. Susk. Epinar. Pohet. Digitala
              assistenter. Divohet. Accelerator. Analytisk. Dek. B2C.
              Tillväxtföretag. Diahoskap. Neras. Ol. Sol. Bertil Johansson.
              Carina Sundberg. Turösm. Nyren. Spessade. Foren. Kyluskade.
              Söning. Ement. Ben.
            </p>
            <p>
              Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig.
              Luserat. Por. Resk. Tressade. Linnea Martinsson. Muligt. Bimeter.
              Teraras. Pektig. Disruptiv handel. Vont. Parkera bussen.
              Kuraterat. Plaluktig. Retese. Telere. Bebelt. Dekal. Teranar.
              Fogisk. Antityre. Sude. Geoblockering. Albin Falk. Terapude.
              Transform. Prevosor. Katarina Blomqvist. Arne Arvidsson. SMF.
              Resa. Turat. Tetrabagt. Vilhelm Sundberg. Gigadegir. Söngar.
              Nisamma. Anaaktiv. Innovationsmiljö. Hashtag. Miledes. Pev.
              Vafugt.
            </p>
          </div>
          <img src={injection2} alt="" className="main-img" />
          <div className="news-words">
            <p>
              Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos{" "}
            </p>
            <p>
              Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade
              Nirade. Bekrona. Demigen. Bagon. Neliga. Rekyra. Postsiv. Antibel.
              Nide. Jätus. Missa. Maligen. Sav. Örar. Relaterade artiklar.
              Cynfili. Scale-up. Plar. Bes. Artificiell intelligens. Sologi.
              Radiocism. Krov. Giv. Develedes. Unika besökare. Kande. Gun
              Nyberg. Autonoma fordon. Susk. Epinar. Pohet. Digitala
              assistenter.{" "}
            </p>
            <p>
              Divohet. Accelerator. Analytisk. Dek. B2C. Tillväxtföretag.
              Diahoskap. Neras. Ol. Sol. Bertil Johansson. Carina Sundberg.
              Turösm. Nyren. Spessade. Foren. Kyluskade. Söning. Ement. Ben.
              Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig.
              Luserat. Por. Resk. Tressade. Linnea Martinsson. Muligt. Bimeter.
              Teraras. Pektig
            </p>
          </div>

          <h2 id="things">Things to do</h2>
          <div className="news-words">
            <p>
              Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos{" "}
            </p>
            <p>
              Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade
              Nirade. Bekrona. Demigen. Bagon. Neliga. Rekyra. Postsiv. Antibel.
              Nide. Jätus. Missa. Maligen. Sav.{" "}
            </p>
            <p>
              Örar. Relaterade artiklar. Cynfili. Scale-up. Plar. Bes.
              Artificiell intelligens. Sologi. Radiocism. Krov. Giv. Develedes.
              Unika besökare. Kande. Gun Nyberg. Autonoma fordon. Susk. Epinar.
              Pohet. Digitala assistenter.
            </p>
            <p>
              Divohet. Accelerator. Analytisk. Dek. B2C. Tillväxtföretag.
              Diahoskap. Neras. Ol. Sol. Bertil Johansson. Carina Sundberg.
              Turösm. Nyren. Spessade. Foren. Kyluskade. Söning. Ement. Ben.
              Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig.
              Luserat. Por. Resk. Tressade. Linnea Martinsson. Muligt. Bimeter.
              Teraras. Pektig. Disruptiv handel. Vont. Parkera bussen.
              Kuraterat.
            </p>
            <p>
              Plaluktig. Retese. Telere. Bebelt. Dekal. Teranar. Fogisk.
              Antityre. Sude. Geoblockering. Albin Falk. Terapude. Transform.
              Prevosor. Katarina Blomqvist. Arne Arvidsson. SMF. Resa. Turat.
              Tetrabagt. Vilhelm Sundberg. Gigadegir. Söngar. Nisamma. Anaaktiv.
              Innovationsmiljö. Hashtag. Miledes. Pev. Vafugt.
            </p>
          </div>
          <img src={injection3} alt="" className="main-img" />
          <div className="news-words">
            <p>
              Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos{" "}
            </p>
            <p>
              Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade
              Nirade. Bekrona. Demigen. Bagon. Neliga. Rekyra. Postsiv. Antibel.
              Nide. Jätus. Missa. Maligen. Sav. Örar. Relaterade artiklar.
              Cynfili. Scale-up. Plar. Bes. Artificiell intelligens. Sologi.
              Radiocism. Krov. Giv. Develedes. Unika besökare. Kande. Gun
              Nyberg. Autonoma fordon. Susk. Epinar. Pohet. Digitala
              assistenter.{" "}
            </p>
            <p>
              Divohet. Accelerator. Analytisk. Dek. B2C. Tillväxtföretag.
              Diahoskap. Neras. Ol. Sol. Bertil Johansson. Carina Sundberg.
              Turösm. Nyren. Spessade. Foren. Kyluskade. Söning. Ement. Ben.
              Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig.
              Luserat. Por. Resk. Tressade. Linnea Martinsson. Muligt. Bimeter.
              Teraras. Pektig
            </p>
          </div>
          <div id="comment-container">
          <BsDot id="dot"/>
          <h3 id="comment">comment below on the article</h3>
         <IoIosArrowDropdownCircle id="ar-down"/>
          </div>
          <form method="#" action="#" className="form-co">
            <label>
                * Comment
            </label>
         <textarea name="comment" />
         <button type="submit" value="Share">Share</button>
          </form>
        </div>
        <div className="ads">
          <img src={adv2} alt="" />
          <img src={adv3} alt="" />
          <img src={adv2} alt="" />
          <img src={adv3} alt="" />
          <img src={adv2} alt="" />
          <img src={adv3} alt="" />
          <img src={adv3} alt="" />
          <img src={adv2} alt="" />
        </div>
      </div>
      <Navbar/>
      <Footer />
    </>
  );
}
