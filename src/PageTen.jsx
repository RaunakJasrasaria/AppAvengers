import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ImageIcon from '@material-ui/icons/Image';

function PageTen(){
  return(
    <div>
      <br /><br /><br />
      <div  className="ten1"><h1>Rewy</h1>
        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
        <FacebookIcon  className="socialicons"/>
        <TwitterIcon className="socialicons"/>
        <InstagramIcon className="socialicons"/>
        <LinkedInIcon className="socialicons"/>

      </div>
      <div className="ten2">
      <h1>Explore</h1>
      <p>Home</p>
      <p>About</p>
      <p>Home</p>
      <p>About</p>
      </div>
      <div className="ten3">
      <h1>Resources</h1>
      <p>Our Scientists</p>
      <p>Testimonials</p>
      <p>Home</p>
      <p>about</p>
      </div>
      <div className="ten4">
      <h1>Address</h1>
      <LocationOnIcon className="locicon"/><p>175 5th Ave, New York, NY 10010,United States</p>
      <CallIcon className="locicon"/><p>+1 (123) 456 7890</p>
      <MailOutlineIcon className="locicon"/><p>hello@rewy.com</p>
      <ImageIcon className="locicon"/><p>+55 785 4578964</p>
      </div>
      <p className="copyright">Copyright @2021 <span className="rewy">Rewy</span> All rights reserved <span className="envytheme"> EnvyTheme </span></p>
    </div>
  );
}

export default PageTen;
