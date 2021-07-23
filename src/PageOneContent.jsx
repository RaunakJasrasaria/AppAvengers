import React from "react";
import img1 from "./Capture123-removebg-preview.png";

function PageOneContent(){
  return(
    <div>
    <div className="contentone">
    <h1 className="headingone">Secure IT Solutions Services</h1>
    <p className="paraone">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button className="buttontwo">Get Started</button>
    </div>

    <div className="imageone">
    <img src={img1} />
    </div>

    </div>

  );
}

export default PageOneContent;
