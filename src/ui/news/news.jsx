import React from "react";
import './news.css'
import diabetes from "../../images/diabetes.png"
import injection from "../../images/injection.jpg"
import logo from "../../images/logoUN.jpg"
import injection2 from "../../images/injection2.jpg"
import injection3 from "../../images/injection3.jpg"
import Navbar from "../components/navbar/navbar";
import Heading from "../components/heading/heading";
import { IconButton } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Advert from "../components/advertisement/advert";
import Footer from "../components/footer/footer";

export default function News() {
    return (
        <>
            <Navbar />
            <Heading image={diabetes} />
            <div className="news-content">
                <div className="news">
                    <h3>REDUCE MORTALITY FROM NON-COMMUNICABLE DISEASES AND PROMOTE MENTAL HEALTH</h3>
                    <img src={injection} alt="" className="main-img" />
                    <p className="img-caption">Science park. Lean startup. Outbound marketing. Somår. </p>
                    <div className="partners">
                        <img src={logo} alt="" className="logoUN" />
                        <div className="partners-info">
                            <p>UN Rwanda</p>
                            <p className="img-caption">Friday, April 12, 2022</p>
                        </div>
                    </div>
                    <div className="news-words">
                        <p>Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos </p>
                        <p>Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade Nirade. Bekrona. Demigen.
                            Bagon. Neliga. Rekyra. Postsiv. Antibel. Nide. Jätus. Missa. Maligen. Sav.
                            Örar. Relaterade artiklar. Cynfili. Scale-up. Plar. Bes. Artificiell intelligens. Sologi. Radiocism. Krov.
                            Giv. Develedes. Unika besökare. Kande. Gun Nyberg. Autonoma fordon. Susk. Epinar. Pohet. Digitala assistenter.
                            Divohet. Accelerator. Analytisk. Dek. B2C. Tillväxtföretag. Diahoskap. Neras. Ol. Sol.
                            Bertil Johansson. Carina Sundberg. Turösm. Nyren. Spessade. Foren. Kyluskade. Söning. Ement. Ben.</p>
                        <p>Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig. Luserat. Por. Resk.
                            Tressade. Linnea Martinsson. Muligt. Bimeter. Teraras. Pektig. Disruptiv handel. Vont. Parkera bussen. Kuraterat.
                            Plaluktig. Retese. Telere. Bebelt. Dekal. Teranar. Fogisk. Antityre. Sude. Geoblockering.
                            Albin Falk. Terapude. Transform. Prevosor. Katarina Blomqvist. Arne Arvidsson. SMF. Resa. Turat. Tetrabagt.
                            Vilhelm Sundberg. Gigadegir. Söngar. Nisamma. Anaaktiv. Innovationsmiljö. Hashtag. Miledes. Pev. Vafugt.
                        </p>
                    </div>
                    <img src={injection2} alt="" className="main-img" />
                    <div className="news-words">
                        <p>Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos </p>
                        <p>Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade Nirade. Bekrona. Demigen.
                            Bagon. Neliga. Rekyra. Postsiv. Antibel. Nide. Jätus. Missa. Maligen. Sav.
                            Örar. Relaterade artiklar. Cynfili. Scale-up. Plar. Bes. Artificiell intelligens. Sologi. Radiocism. Krov.
                            Giv. Develedes. Unika besökare. Kande. Gun Nyberg. Autonoma fordon. Susk. Epinar. Pohet. Digitala assistenter. </p>
                        <p>Divohet. Accelerator. Analytisk. Dek. B2C. Tillväxtföretag. Diahoskap. Neras. Ol. Sol.
                            Bertil Johansson. Carina Sundberg. Turösm. Nyren. Spessade. Foren. Kyluskade. Söning. Ement. Ben.
                            Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig. Luserat. Por. Resk.
                            Tressade. Linnea Martinsson. Muligt. Bimeter. Teraras. Pektig</p>
                    </div>

                    <h2>Things to do</h2>
                    <div className="news-words">
                        <p>Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos </p>
                        <p>Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade Nirade. Bekrona. Demigen.
                            Bagon. Neliga. Rekyra. Postsiv. Antibel. Nide. Jätus. Missa. Maligen. Sav. </p>
                        <p>Örar. Relaterade artiklar. Cynfili. Scale-up. Plar. Bes. Artificiell intelligens. Sologi. Radiocism. Krov.
                            Giv. Develedes. Unika besökare. Kande. Gun Nyberg. Autonoma fordon. Susk. Epinar. Pohet. Digitala assistenter.</p>
                        <p>Divohet. Accelerator. Analytisk. Dek. B2C. Tillväxtföretag. Diahoskap. Neras. Ol. Sol.
                            Bertil Johansson. Carina Sundberg. Turösm. Nyren. Spessade. Foren. Kyluskade. Söning. Ement. Ben.
                            Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig. Luserat. Por. Resk.
                            Tressade. Linnea Martinsson. Muligt. Bimeter. Teraras. Pektig. Disruptiv handel. Vont. Parkera bussen. Kuraterat.</p>
                        <p>Plaluktig. Retese. Telere. Bebelt. Dekal. Teranar. Fogisk. Antityre. Sude. Geoblockering.
                            Albin Falk. Terapude. Transform. Prevosor. Katarina Blomqvist. Arne Arvidsson. SMF. Resa. Turat. Tetrabagt.
                            Vilhelm Sundberg. Gigadegir. Söngar. Nisamma. Anaaktiv. Innovationsmiljö. Hashtag. Miledes. Pev. Vafugt.
                        </p>
                    </div>
                    <img src={injection3} alt="" className="main-img" />
                    <div className="news-words">
                        <p>Soning. Täs Setusamma Besamma Doska Kånas Gektig Viren Nick Protos </p>
                        <p>Pseudograf Euroligen Egonisore Pure players Jäl Vaheten Berade Nirade. Bekrona. Demigen.
                            Bagon. Neliga. Rekyra. Postsiv. Antibel. Nide. Jätus. Missa. Maligen. Sav.
                            Örar. Relaterade artiklar. Cynfili. Scale-up. Plar. Bes. Artificiell intelligens. Sologi. Radiocism. Krov.
                            Giv. Develedes. Unika besökare. Kande. Gun Nyberg. Autonoma fordon. Susk. Epinar. Pohet. Digitala assistenter. </p>
                        <p>Divohet. Accelerator. Analytisk. Dek. B2C. Tillväxtföretag. Diahoskap. Neras. Ol. Sol.
                            Bertil Johansson. Carina Sundberg. Turösm. Nyren. Spessade. Foren. Kyluskade. Söning. Ement. Ben.
                            Tunint. Anatyp. Smygöppna. Spevosam. Döna. Kreativ. Nidolig. Luserat. Por. Resk.
                            Tressade. Linnea Martinsson. Muligt. Bimeter. Teraras. Pektig</p>
                    </div>

                    <div className="icons">
                        <h2>Share</h2>
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
                    <h3>comment below on the article</h3>
                    <textarea type="text" name="description" />
                </div>
                <div className="ads">
                    <Advert />
                </div>
            </div>
            <Navbar />
            <Footer />
        </>
    )
}