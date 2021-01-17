import React, { Component } from "react";
 
import Swiperflip from "../Swiperflip/Swiperflip"
 
import devh from "../../static/images/devh.jpg";
 
import javajs from "../../static/images/javajs.jpg";
import jsvg  from "../../static/images/jsvg.png"
import nstore from "../../static/images/nstore.png"
import nextstore from "../../static/images/nextstore.png"
import nextjs2 from "../../static/images/nextjs2.png"
import ar1 from "../../static/images/ar1.png"
import ar2 from "../../static/images/ar2.png"
import places from "../../static/images/places.png"
import places1 from "../../static/images/places1.png"
import places3 from "../../static/images/places3.png"
import connect1 from "../../static/images/connect1.png"
import connect2 from "../../static/images/connect2.png"
import zstore1 from "../../static/images/zstore1.png"
import zstore2 from "../../static/images/zstore2.png"

import nodejsblack from "../../static/images/nodejsblack.png"
import dconn from "../../static/images/dconn.png"
 

class Mainbacks extends Component {
     
  render() {
     

   
    let tpx = null;
    switch (this.props.type) {
      case 0:
        tpx = (
          <div className={`tpx-one  fadein  `}>
            <h1 className="tpx-one-title">NEXTJS</h1>
            <Swiperflip imageone={nstore} imagetwo={javajs} imagethree={nextstore} imagefour={nodejsblack} imagefive={nextjs2} imagesix={jsvg}/>
            <div className="tpx-one-btn">
   <a href="https://nextjsshop.now.sh/login" className="shopbtn">VISIT</a>

            </div>
          </div>
        );
        break;
      case 1:
        tpx = (
          <div className={`tpx-two fadeout`}>
            <h1 className="tpx-two-title">EXCEL TO JSON</h1>
                        <Swiperflip imageone={ar1} imagetwo={javajs} imagethree={ar2} imagefour={nodejsblack} imagefive={devh} imagesix={jsvg}/>
            <div className="tpx-two-btn">
      <a href="https://vibrant-montalcini-6fcf23.netlify.app/" className="shopbtn">VISIT</a>

           
            </div>
          </div>
        );
        break;
      case 2:
        tpx = (
          <div className={`tpx-three fadein`}>
            <h1 className="tpx-three-title">MERN CRUDS</h1>
            <Swiperflip imageone={places} imagetwo={javajs} imagethree={places1} imagefour={nodejsblack} imagefive={places3} imagesix={jsvg}/>
            <div className="tpx-three-btn">
    <a href="https://maxplacesapp.web.app/" className="shopbtn">VISIT</a>

         
            </div>
          </div>
        );
        break;
      case 3:
        tpx = (
          <div className={`tpx-four fadeout`}>
            <h1 className="tpx-four-title">PLATFORM </h1>
               <Swiperflip imageone={dconn} imagetwo={javajs} imagethree={connect2} imagefour={connect1} imagefive={devh} imagesix={jsvg}/>
            <div className="tpx-four-btn">
              <a href="https://powerful-ridge-27803.herokuapp.com/" className="shopbtn">VISIT</a>
            </div>
          </div>
        );
        break;
          case 4:
        tpx = (
          <div className={`tpx-four fadein`}>
            <h1 className="tpx-four-title">MERN STORE </h1>
               <Swiperflip imageone={zstore1} imagetwo={javajs} imagethree={zstore2} imagefour={connect1} imagefive={devh} imagesix={jsvg}/>
            <div className="tpx-four-btn">
              <a href="https://quirky-bhabha-15bb06.netlify.app/#/" className="shopbtn">VISIT</a>
            </div>
          </div>
        );
        break; 
      default:
        tpx = <div className="tpx-one"></div>;
    }
    return tpx;   
  }
}

export default Mainbacks;
