import React from "react";
import Navbar from "./Navbar.jsx"
import PageOneContent from "./PageOneContent.jsx"
import PageTwo from "./PageTwo.jsx";
import PageThree from "./PageThree.jsx";
import PageFour from "./PageFour.jsx";
import PageFive from "./PageFive.jsx";
import PageSix from "./PageSix.jsx";
import PageSeven from "./PageSeven.jsx";
import PageEight from "./PageEight.jsx";
import PageNine from "./PageNine.jsx";
import PageTen from "./PageTen.jsx";

function App(){
  return(
    <div>
    <div className="pageonecolor">
    <Navbar />
    <PageOneContent />
    </div>
    <PageTwo />
    <PageThree />
    <div className="fourth">
    <PageFour />
    </div>
    <div className="fifth">
    <PageFive />
    </div>
    <PageSix />
    <PageSeven />
    <PageEight />
    <PageNine />
    <PageTen />
    </div>
  );
}

export default App;
