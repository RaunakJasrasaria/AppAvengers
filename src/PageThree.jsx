import React from "react";
import img2 from "./Captureqwe-removebg-preview.png";
import Checkbox from "./Checkbox.jsx";

function PageThree(){
  return(
    <div className="row">
    <div className="col-lg-6">
    <img className="imgthree" src={img2} />
    </div>

    <div className="col-lg-6">
    <p className="orangetext">SERVICES</p>
    <h1 className="headingthree">Cloud Hosting Services</h1>
    <p className="contentthree">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
    <Checkbox />
    <Checkbox />
    <Checkbox />
    <Checkbox />
    </div>

    </div>
  );
}

export default PageThree;
