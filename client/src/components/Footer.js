import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  let socialMediaLinks = {
    facebookURL: "https://www.facebook.com/HofarsEnergy",
    instagramURL: "https://www.instagram.com/hofars_energy/",
    linkedInURL: "https://www.linkedin.com/company/hofarsenergy/",
    contactUsmail: "info@hofars.com",
    mainWeb: "hofars.com",
  };
  return (
    <div className="box">
      <div className="container">
        <h1
            style={{ color: "#ca327a", textAlign: "center", marginTop: "50px" }}
        >
            Hofars EV Calender : All your Events at Once Place
          </h1>
        
        <div className="row">
          <div className="column">
            <div className="heading">About Us</div>
            <div className="content">
            At Hofars, we strive to provide the best solutions to your business’s needs. We do this by employing our competent team of experts who will determine your requirements and provide ample solutions to those with pinpoint precision so you save not only time but also the capital.
            </div>
          </div>
          <div className="column">
            <div className="heading">Social Media</div>
              <div className="footer-link"><a href='https://www.facebook.com/HofarsEnergy'>Facebook</a></div>
              <div className="footer-link"><a href="https://www.linkedin.com/company/hofarsenergy/">LinkedIn</a></div>
              <div className="footer-link"><a href="https://www.instagram.com/hofars_energy/">Instagram</a></div>
          </div>
          <div className="column">
            <img className='logoImage' src="https://hofars.com/wp-content/uploads/2021/06/666-2048x879.png" width='400px' alt="company-logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
