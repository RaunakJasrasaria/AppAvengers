import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

function PageTwoCard(props){
  return(
    <ReactBootStrap.Card style={{ width: '30rem' },{height:'15rem'}}>
  <ReactBootStrap.Card.Body class="carddoc">
    <ReactBootStrap.Card.Title><AirplanemodeActiveIcon style={{ fontSize: 60 }} /></ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Title>{props.title}</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Card.Link href="#" className="orangetext">View Detils</ReactBootStrap.Card.Link>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
  );
}

export default PageTwoCard;
