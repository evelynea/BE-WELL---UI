import React from "react";
import "./bulletin.css";
import globalhealth from "../../../images/globalhealth.png";
import health from "../../../images/healthcare.png"
import vaccine from "../../../images/vaccine.png"
export default function Bulletin(props) {
    // const buImage=props.buImage;
  return (
    <div>
        <div className="bu-container">
        <div className="pa-mg">
            <img src={globalhealth} alt="" className="img"/>
        </div>    
        <div className="pa-bu">
        <h2>IMPROVE EARLY WARNING SYSTEMS FOR GLOBAL HEALTH RISKS</h2>
        <p>
          Artificiell intelligens. Coworking space. Fasam. Plamins. Slöjböter.
          Heteroskop. Hjärtstartare. Tett. Niskade. Jålig. Martin Isaksson. Same
          day delivery. Fadat. Sesk. Fura. SEO. Gäska. Sybel. Blockchain.
          Poskapet. Plack. Artificiell intelligens. Lasat. Motiverad. Autor.
          Rerar. Sebivis. Triple helix. Retunera. Misoitet. Poska. Jåkroriv.
          Relaterade artiklar. Nimona. Regörad. Sölig. Facial recognition.
          Hemir. Parabikas. Avvisningsfrekvens. Misostat. Diartad. Jegt. Ananar.
          Anas. Mikropode. Pladäre. Decifun. Karolina Eklund.
        </p>
        <button type="submit" value="send">
          Read More
        </button>
      </div>
      {/* <hr/> */}
        </div>    
        <div className="bu-container">
        <div>
            <img src={health} alt=""/>
        </div>    
        <div className="pa-bu">
        <h2>INCREASE HEALTH FINANCING AND SUPPORT HEALTH WORKFORCE IN DEVELOPING COUNTRIES</h2>
        <p>
          Artificiell intelligens. Coworking space. Fasam. Plamins. Slöjböter.
          Heteroskop. Hjärtstartare. Tett. Niskade. Jålig. Martin Isaksson. Same
          day delivery. Fadat. Sesk. Fura. SEO. Gäska. Sybel. Blockchain.
          Poskapet. Plack. Artificiell intelligens. Lasat. Motiverad. Autor.
          Rerar. Sebivis. Triple helix. Retunera. Misoitet. Poska. Jåkroriv.
          Relaterade artiklar. Nimona. Regörad. Sölig. Facial recognition.
          Hemir. Parabikas. Avvisningsfrekvens. Misostat. Diartad. Jegt. Ananar.
          Anas. Mikropode. Pladäre. Decifun. Karolina Eklund.
        </p>
        <button type="submit" value="send">
          Read More
        </button>
      </div>
        </div>   
        <div className="bu-container">
        <div>
            <img src={vaccine} alt=""/>
        </div>    
        <div className="pa-bu">
        <h2>INCREASE HEALTH FINANCING AND SUPPORT HEALTH WORKFORCE IN DEVELOPING COUNTRIES</h2>
        <p>
          Artificiell intelligens. Coworking space. Fasam. Plamins. Slöjböter.
          Heteroskop. Hjärtstartare. Tett. Niskade. Jålig. Martin Isaksson. Same
          day delivery. Fadat. Sesk. Fura. SEO. Gäska. Sybel. Blockchain.
          Poskapet. Plack. Artificiell intelligens. Lasat. Motiverad. Autor.
          Rerar. Sebivis. Triple helix. Retunera. Misoitet. Poska. Jåkroriv.
          Relaterade artiklar. Nimona. Regörad. Sölig. Facial recognition.
          Hemir. Parabikas. Avvisningsfrekvens. Misostat. Diartad. Jegt. Ananar.
          Anas. Mikropode. Pladäre. Decifun. Karolina Eklund.
        </p>
        <button type="submit" value="send">
          Read More
        </button>
      </div>
        </div> 
    </div>
  );
}
