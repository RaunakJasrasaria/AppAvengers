import React from "react";
import img4 from "./Captureasd.PNG";

function PageSix(){
  return(
    <div>
    <div className="pagetwo">
    <p className="orangetext">TEAM MEMBERS</p>
    <h1 className="headingtwo">Our Awesome Team</h1>
    <p className="contenttwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
    <img className="imgfour1" src={img4} />
    <img className="imgfour2" src={img4} />
    <img className="imgfour3" src={img4} />
    <img className="imgfour4" src={img4} />
    <p className="t1">Merv Adrian</p>
    <p className="t2">Kirk Borne</p>
    <p className="t3">Carla Gentry</p>
    <p className="t4">Marie Curie</p>
    <p className="p1">CEO & Founder</p>
    <p className="p2">UX/UI Designer</p>
    <p className="p3">Web Developer</p>
    <p className="p4">Support</p>    
    </div>
  );
}

export default PageSix;
