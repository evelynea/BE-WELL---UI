import React from "react";
import "./idea.css";
import "../advertisement/advert"
import Navbar from "../navbar/navbar";
import Heading from "../heading/heading";
import ideaHeader from "../../../images/ideaHeader.png";
import Advert from "../advertisement/advert";
import Footer from "../footer/footer";


export default function Idea() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Heading image={ideaHeader} />
      </div>
      <div className="body-container">
        <div className="form-part">
          <p className="para-1">Dear bewell’ reader,</p>
          <p className="para2"> 
            You have an idea about an article bewell should do? You can submit
            it below. Please click on “Add a story idea” and fill out the form.
            Please make sure that this idea respects our Guidelines. Once
            submitted, it will be sent to our editors that will vet it. If
            approved, it will appear in the list you see on this page. Then,
            make sure it gets many votes!
          </p>

          <p className="para3">
            Every day at 8pm, the most upvoted story will be assigned to bewell’
            journalist and the submitter of the idea, if s/he feels like it. To
            upvote or downvote a story, click on its title and you will see the
            buttons. If you need more details about this platform, we have
            written an article specifically on it here. If you need more
            information, you can reach us on our WhatsApp number: +250 781 340
            968 or email us at readers@bewellrwanda.com.
          </p>
          <p className="para4">Thanks a lot for your time,</p>

          <p className="para5">Be Well newsroom</p>
          <form action="#" className="form">
          <label>* Title</label>
          <input type= "text" name="title"/>
          <label>* Description (Edit Summary)</label>
          <textarea type= "text" name="description"/>
          <label>* Name</label>
          <input type= "text" name="name"/>
          <label>* Email</label>
          <input type= "email" name="email"/>
          <label>* Whatsapp Number</label>
          <input type= "number" name="number"/>
          <button type="submit" value="Send">Send</button>
          </form>
        
        </div>
        <div className="adv-part">
          <Advert/>
        </div>
       
       
      </div>
      <div>
          <Navbar/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}
