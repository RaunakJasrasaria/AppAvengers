import React from "react";
import PageTwoCard from "./PageTwoCard.jsx"

function PageFive(){
  return(
    <div>
    <p className="orangetext">OUR FEATURES</p>
    <h1 className="headingfive"> We’re Here To Help</h1>
    <p className="contentfive">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

    <div className="row hellocard">
    <div className="col-lg-3 cardss"><PageTwoCard title="Incredible Infrastructure" /></div>
    <div className="col-lg-3 cardss"><PageTwoCard title="Email Notifications"/></div>
    <div className="col-lg-3 cardss"><PageTwoCard title="Simple Dashboard"/></div></div>

    <div className="row hellocard againcard">
    <div className="col-lg-3 cardss"><PageTwoCard title="Information Retrieval" /></div>
    <div className="col-lg-3 cardss"><PageTwoCard title="Drag and Drop"/></div>
    <div className="col-lg-3 cardss"><PageTwoCard title="Deadline Reminders"/></div></div>
    </div>


  );
}

export default PageFive;
