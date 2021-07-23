import React from "react";
import PageTwoCard from "./PageTwoCard.jsx"

function Pagetwo(){
  return(
    <div className="pagetwo">
    <p className="orangetext">OUR SOLUTIONS</p>
    <h1 className="headingtwo">We Different From Others Should Choose Us</h1>
    <p className="contenttwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    <div className="row hellocard">
    <div className="col-lg-3 cardss"><PageTwoCard title="Code Security" /></div>
    <div className="col-lg-3 cardss"><PageTwoCard title="Team Management"/></div>
    <div className="col-lg-3 cardss"><PageTwoCard title="Access Controlled"/></div></div>
    </div>
  );
}

export default Pagetwo
