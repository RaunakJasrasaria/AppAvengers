import React from "react";
import CheckIcon from '@material-ui/icons/Check';

function Checkbox(){
  return(
    <div className="row">
    <div className="col-lg-6">

    <div className="row linethree">
    <div className="col">
    <CheckIcon className="checkicon" style={{ fontSize: 35 }}/>
    </div>
    <div className="col checkcontent">
    <p>File storage</p>
    </div>
    </div>

    </div>
    <div className="col">
    <div className="row linethree">
    <div className="col">
    <CheckIcon className="checkicon" style={{ fontSize: 35 }}/>
    </div>
    <div className="col checkcontent">
    <p>File Storage</p>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Checkbox;
